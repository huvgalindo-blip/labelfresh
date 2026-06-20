#!/bin/bash

# ========================================
# LabelFresh - Script para Iniciar
# Mac/Linux
# ========================================

# Colores
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m'

clear

echo -e "${BLUE}"
echo "========================================"
echo "  LabelFresh - Generador de Etiquetas"
echo "========================================"
echo -e "${NC}"
echo ""

# Verificar si node_modules existe
if [ ! -d "node_modules" ]; then
    echo "Primero debe instalar las dependencias."
    echo ""
    echo "Ejecute: bash instalar.sh"
    echo ""
    exit 1
fi

echo "Iniciando LabelFresh en http://localhost:3000..."
echo ""
echo "========================================"
echo -e "${GREEN}✓ Servidor activo${NC}"
echo "========================================"
echo ""
echo "Abra su navegador en: http://localhost:3000"
echo ""
echo "Para detener el servidor, presione Ctrl + C"
echo ""

# Intentar abrir navegador automáticamente
if command -v xdg-open &> /dev/null; then
    xdg-open http://localhost:3000 &
elif command -v open &> /dev/null; then
    open http://localhost:3000 &
fi

npm start