const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

/**
 * Genera un PDF de etiqueta alimentaria usando Puppeteer
 * @param {Object} data - Objeto con los datos a reemplazar en la plantilla
 * @param {string} outputPath - Ruta donde se guardará el PDF generado
 * @returns {Promise<void>}
 */
async function generateEtiqueta(data, outputPath) {
  try {
    // Leer la plantilla HTML
    const templatePath = path.join(__dirname, 'template.html');
    let html = fs.readFileSync(templatePath, 'utf8');

    // Reemplazar marcadores con los datos proporcionados
    for (const [key, value] of Object.entries(data)) {
      const placeholder = `{{${key}}}`;
      html = html.replace(new RegExp(placeholder, 'g'), value || '');
    }

    // Asegurar que el directorio de salida existe
    const outputDir = path.dirname(outputPath);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    // Lanzar navegador Puppeteer
    const browser = await puppeteer.launch({
      headless: 'new',
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage'
      ]
    });

    const page = await browser.newPage();

    // Establecer contenido HTML y esperar a que cargue
    await page.setContent(html, {
      waitUntil: 'networkidle0',
      timeout: 30000
    });

    // Generar PDF con dimensiones exactas para impresión térmica (horizontal 80×68mm)
    await page.pdf({
      path: outputPath,
      width: '80mm',
      height: '68mm',
      printBackground: true,
      margin: { 
        top: '0mm', 
        right: '0mm', 
        bottom: '0mm', 
        left: '0mm' 
      },
      preferCSSPageSize: false
    });

    // Cerrar navegador
    await browser.close();

    console.log(`PDF generado exitosamente: ${outputPath}`);

  } catch (error) {
    console.error('Error en generateEtiqueta:', error);
    throw error;
  }
}

module.exports = generateEtiqueta;
