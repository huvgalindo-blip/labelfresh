@echo off
REM ========================================
REM LabelFresh - Script para Iniciar
REM Windows (.bat)
REM ========================================

color 0A
title LabelFresh - Generador de Etiquetas

cls
echo.
echo ========================================
echo   LabelFresh - Generador de Etiquetas
echo ========================================
echo.

REM Verificar si node_modules existe
if not exist node_modules (
    echo ❌ ERROR: Las dependencias no están instaladas
    echo.
    echo Por favor, ejecute primero: INSTALAR.bat
    echo.
    pause
    exit /b 1
)

echo Iniciando LabelFresh en http://localhost:3000...
echo.
echo ========================================
echo ✓ Servidor activo
echo ========================================
echo.
echo Abra su navegador en: http://localhost:3000
echo.
echo Para detener el servidor, cierre esta ventana
echo o presione Ctrl + C
echo.

REM Abrir navegador automáticamente
start http://localhost:3000

REM Iniciar servidor
npm start
