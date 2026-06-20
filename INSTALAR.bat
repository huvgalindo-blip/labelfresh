@echo off
REM ========================================
REM LabelFresh - Script de Instalación
REM Windows (.bat)
REM ========================================

color 0A
title LabelFresh - Instalación Automática

cls
echo.
echo ========================================
echo   LabelFresh - Generador de Etiquetas
echo   Instalación Automática para Windows
echo ========================================
echo.

REM Verificar si Node.js está instalado
echo Verificando Node.js...
node --version >nul 2>&1
if errorlevel 1 (
    echo.
    echo ❌ ERROR: Node.js no está instalado
    echo.
    echo Por favor, descargue e instale Node.js desde:
    echo https://nodejs.org/
    echo.
    echo Después de instalar Node.js, vuelva a ejecutar este script.
    echo.
    pause
    exit /b 1
)

echo ✓ Node.js encontrado

REM Mostrar versión de Node.js
echo.
echo Versión de Node.js:
node --version
echo.

REM Instalar dependencias
echo ========================================
echo Descargando e instalando dependencias...
echo (Esto puede tardar 5-10 minutos la primera vez)
echo ========================================
echo.

call npm install
if errorlevel 1 (
    echo.
    echo ❌ ERROR durante la instalación de dependencias
    echo Intente ejecutar este script como administrador
    echo.
    pause
    exit /b 1
)

echo.
echo ✓ Dependencias instaladas correctamente
echo.

REM Crear carpeta de salida si no existe
if not exist outputs mkdir outputs
echo ✓ Carpeta de salida creada

echo.
echo ========================================
echo   INSTALACIÓN COMPLETADA
echo ========================================
echo.
echo Presione cualquier tecla para abrir la aplicación...
echo.
pause

REM Abrir navegador
echo Iniciando LabelFresh en http://localhost:3000...
echo.

REM Iniciar servidor en background
start /B cmd /c npm start

REM Esperar a que el servidor inicie
timeout /t 3 /nobreak

REM Abrir navegador automáticamente
start http://localhost:3000

REM Mantener la ventana abierta
echo.
echo ========================================
echo ✓ Servidor activo en http://localhost:3000
echo ========================================
echo.
echo Para detener el servidor, cierre esta ventana
echo o presione Ctrl + C
echo.
pause