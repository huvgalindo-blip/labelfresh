#!/usr/bin/env bash
cd "$(dirname "$0")"

echo ""
echo "========================================"
echo "   LabelFresh - Generador de Etiquetas"
echo "========================================"
echo ""

if ! command -v node >/dev/null 2>&1; then
  echo "[ERROR] Node.js no esta instalado en este equipo."
  echo ""
  echo "Instala Node.js LTS desde: https://nodejs.org/"
  echo "Luego ejecuta de nuevo este script."
  echo ""
  read -r -p "Pulsa Enter para cerrar..."
  exit 1
fi

node scripts/launch.js
exit_code=$?

if [ "$exit_code" -ne 0 ]; then
  echo ""
  read -r -p "Pulsa Enter para cerrar..."
fi

exit "$exit_code"
