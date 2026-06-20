#!/bin/bash

# ========================================
# LabelFresh - Script de Instalación
# Mac/Linux (.sh)
# ========================================

# Colores para output
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Limpiar pantalla
clear

# Banner
echo -e "${BLUE}"
echo "========================================"
echo "  LabelFresh - Generador de Etiquetas"
echo "  Instalación Automática para Mac/Linux"
echo "========================================"
echo -e "${NC}"
echo ""

# Verificar si Node.js está instalado
echo "Verificando Node.js..."
if ! command -v node &> /dev/null; then
    echo -e "${RED}❌ ERROR: Node.js no está instalado${NC}"
    echo ""
    echo "Por favor, instale Node.js desde:"
    echo "https://nodejs.org/"
    echo ""
    echo "Después de instalar Node.js, ejecute nuevamente este script:"
    echo "bash instalar.sh"
    echo ""
    exit 1
fi

echo -e "${GREEN}✓ Node.js encontrado${NC}"
echo ""
echo "Versión de Node.js:"
node --version
echo ""

# Verificar npm
if ! command -v npm &> /dev/null; then
    echo -e "${RED}❌ ERROR: npm no está instalado${NC}"
    echo "Por favor, reinstale Node.js"
    exit 1
fi

echo -e "${GREEN}✓ npm encontrado${NC}"
echo ""

# Instalar dependencias
echo "========================================"
echo "Descargando e instalando dependencias..."
echo "(Esto puede tardar 5-10 minutos)"
echo "========================================"
echo ""

npm install
if [ $? -ne 0 ]; then
    echo ""
    echo -e "${RED}❌ ERROR durante la instalación${NC}"
    echo "Intente ejecutar con permisos de administrador:"
    echo "sudo bash instalar.sh"
    exit 1
fi

echo ""
echo -e "${GREEN}✓ Dependencias instaladas correctamente${NC}"
echo ""

# Crear carpeta de salida
if [ ! -d "outputs" ]; then
    mkdir outputs
    echo -e "${GREEN}✓ Carpeta de salida creada${NC}"
fi

echo ""
echo "========================================"
echo -e "${GREEN}  INSTALACIÓN COMPLETADA${NC}"
echo "========================================"
echo ""

# Dar permisos de ejecución
chmod +x iniciar.sh 2>/dev/null

# Preguntar si iniciar ahora
read -p "¿Desea iniciar la aplicación ahora? (s/n): " -n 1 -r
echo ""

if [[ $REPLY =~ ^[Ss]$ ]]; then
    echo ""
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
        # Linux
        xdg-open http://localhost:3000 &
    elif command -v open &> /dev/null; then
        # Mac
        open http://localhost:3000 &
    fi
    
    npm start
else
    echo ""
    echo "Para iniciar la aplicación más tarde, ejecute:"
    echo ""
    echo -e "${YELLOW}npm start${NC}"
    echo ""
    echo "Luego abra su navegador en: http://localhost:3000"
    echo ""
fi