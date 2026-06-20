@echo off
chcp 65001 >nul
title LabelFresh - Generador de Etiquetas
cd /d "%~dp0"

echo.
echo ========================================
echo    LabelFresh - Generador de Etiquetas
echo ========================================
echo.

where node >nul 2>&1
if errorlevel 1 (
    echo [ERROR] Node.js no esta instalado en este equipo.
    echo.
    echo Para usar LabelFresh necesitas instalar Node.js una sola vez:
    echo   1. Ve a https://nodejs.org/
    echo   2. Descarga la version LTS
    echo   3. Instala con las opciones por defecto
    echo   4. Vuelve a hacer doble clic en este archivo
    echo.
    pause
    exit /b 1
)

node scripts\launch.js
if errorlevel 1 (
    echo.
    pause
)
