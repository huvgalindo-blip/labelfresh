/**
 * Lanzador amigable de LabelFresh
 * Comprueba requisitos, instala dependencias si hace falta,
 * inicia el servidor y abre el navegador automáticamente.
 */

const { spawn, execSync } = require('child_process');
const fs = require('fs');
const http = require('http');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const PORT = process.env.PORT || 3000;
const APP_URL = `http://localhost:${PORT}`;
const HEALTH_URL = `${APP_URL}/api/health`;
const MAX_WAIT_MS = 30000;
const POLL_INTERVAL_MS = 500;

function log(message) {
  console.log(message);
}

function logHeader() {
  console.log('');
  console.log('========================================');
  console.log('   LabelFresh - Generador de Etiquetas');
  console.log('========================================');
  console.log('');
}

function fail(message) {
  console.error('');
  console.error('ERROR:', message);
  console.error('');
  process.exit(1);
}

function checkNodeVersion() {
  const version = process.versions.node;
  const major = parseInt(version.split('.')[0], 10);

  if (major < 14) {
    fail(`Se requiere Node.js 14 o superior. Version detectada: ${version}`);
  }
}

function ensureDependencies() {
  const nodeModulesPath = path.join(ROOT, 'node_modules');
  const expressPath = path.join(nodeModulesPath, 'express');

  if (fs.existsSync(expressPath)) {
    return;
  }

  log('Primera ejecucion: instalando dependencias...');
  log('(Puede tardar 5-10 minutos. Se descargara Chromium para los PDF.)');
  log('');

  try {
    execSync('npm install', {
      cwd: ROOT,
      stdio: 'inherit',
      env: process.env
    });
    log('');
    log('Dependencias instaladas correctamente.');
    log('');
  } catch (error) {
    fail('No se pudieron instalar las dependencias. Comprueba tu conexion a internet e intentalo de nuevo.');
  }
}

function checkHealth() {
  return new Promise((resolve) => {
    const request = http.get(HEALTH_URL, (response) => {
      let body = '';
      response.on('data', (chunk) => { body += chunk; });
      response.on('end', () => {
        resolve(response.statusCode === 200 && body.includes('Servidor funcionando'));
      });
    });

    request.on('error', () => resolve(false));
    request.setTimeout(2000, () => {
      request.destroy();
      resolve(false);
    });
  });
}

function waitForServer() {
  return new Promise((resolve, reject) => {
    const startedAt = Date.now();

    const poll = async () => {
      if (await checkHealth()) {
        resolve();
        return;
      }

      if (Date.now() - startedAt > MAX_WAIT_MS) {
        reject(new Error('El servidor tardo demasiado en iniciar.'));
        return;
      }

      setTimeout(poll, POLL_INTERVAL_MS);
    };

    poll();
  });
}

async function handleExistingServer() {
  const alreadyRunning = await checkHealth();
  if (!alreadyRunning) {
    return false;
  }

  log('');
  log('LabelFresh ya esta en ejecucion en este equipo.');
  log(`Abriendo navegador en ${APP_URL}`);
  log('');
  openBrowser();
  return true;
}

function openBrowser() {
  const platform = process.platform;
  let command;
  let args;

  if (platform === 'win32') {
    command = 'cmd';
    args = ['/c', 'start', '', APP_URL];
  } else if (platform === 'darwin') {
    command = 'open';
    args = [APP_URL];
  } else {
    command = 'xdg-open';
    args = [APP_URL];
  }

  spawn(command, args, {
    detached: true,
    stdio: 'ignore'
  }).unref();
}

function startServer() {
  return spawn('node', ['server.js'], {
    cwd: ROOT,
    stdio: 'inherit',
    env: { ...process.env, PORT: String(PORT) }
  });
}

function setupShutdown(serverProcess) {
  const shutdown = () => {
    log('');
    log('Cerrando LabelFresh...');
    serverProcess.kill();
    process.exit(0);
  };

  process.on('SIGINT', shutdown);
  process.on('SIGTERM', shutdown);
}

async function main() {
  logHeader();
  checkNodeVersion();
  ensureDependencies();

  if (await handleExistingServer()) {
    return;
  }

  log('Iniciando servidor...');

  const serverProcess = startServer();
  setupShutdown(serverProcess);

  serverProcess.on('error', () => {
    fail('No se pudo iniciar el servidor.');
  });

  serverProcess.on('exit', (code) => {
    if (code && code !== 0) {
      fail(
        `El puerto ${PORT} parece estar en uso por otra aplicacion. ` +
        'Cierra la otra app o cambia PORT en server.js.'
      );
    }
  });

  try {
    await waitForServer();
  } catch (error) {
    serverProcess.kill();
    fail(error.message);
  }

  log('');
  log('LabelFresh esta listo.');
  log(`Abriendo navegador en ${APP_URL}`);
  log('');
  log('Mantén esta ventana abierta mientras uses la aplicacion.');
  log('Para cerrar LabelFresh, pulsa Ctrl+C en esta ventana.');
  log('');

  openBrowser();
}

main().catch((error) => {
  fail(error.message);
});
