# LabelFresh - Generador de Etiquetas Alimentarias

Aplicación web para generar etiquetas alimentarias en formato PDF para impresión térmica en Zebra ZD420 (203 dpi) con tamaño 68mm × 80mm.

## 🚀 Acceso (Versión principal)

La aplicación está disponible directamente en GitHub Pages — no requiere instalación:

**👉 https://huvgalindo-blip.github.io/labelfresh/**

Abre el enlace, rellena los datos y descarga o imprime tu etiqueta desde cualquier navegador.

## 📋 Características

- ✅ Vista previa fiel al resultado de impresión (68mm × 80mm)
- ✅ Descarga PDF listo para imprimir
- ✅ Impresión directa calibrada para Zebra ZD420 203 dpi
- ✅ Soporte para múltiples productos y nombre personalizado
- ✅ Cálculo automático de fecha de consumo (+19 días)
- ✅ Campos editables: producto, peso, ingredientes, lote, fechas
- ✅ Funciona sin instalación — 100% web
- ✅ Interfaz responsive con Bootstrap 5

## 🖨️ Configuración de Impresión

- **Tamaño:** 68mm × 80mm
- **Impresora recomendada:** Zebra ZD420 203 dpi
- **Tipo:** Impresión térmica directa
- **Orientación:** Vertical (portrait)
- **Márgenes:** Ninguno (0mm)

## 🎯 Uso

1. Abrir https://huvgalindo-blip.github.io/labelfresh/
2. **Seleccionar producto** del menú desplegable o escribir uno personalizado
3. **Editar ingredientes** si es necesario
4. **Ingresar lote** (ej: L-2024-001)
5. **Seleccionar fecha de elaboración**
6. Usar **+19d** para calcular la fecha de consumo automáticamente
7. Clic en **Vista Previa** para ver la etiqueta
8. Clic en **Descargar PDF** para el archivo PDF imprimible
9. Clic en **Imprimir** para impresión directa desde el navegador

## 📁 Estructura del Proyecto

```
labelfresh/
├── docs/
│   ├── index.html          # ✅ Aplicación principal (GitHub Pages)
│   └── .nojekyll
├── logo/
│   └── LOGOTIPO_QUALITY_PIZZAFRESH_1.png
├── CHANGELOG.md
├── README.md
└── [archivos legacy Node/Express — no necesarios para la versión web]
```

## 🔧 Tecnologías (versión web)

- **HTML5 / CSS3** — Estructura, estilos y layout de impresión (`@page`)
- **JavaScript ES6+** — Lógica de generación de etiquetas
- **Bootstrap 5** — Interfaz responsive
- **html2pdf.js** — Generación de PDF en el navegador

## ⚠️ Notas

- La fecha de consumo preferente se calcula automáticamente (+19 días desde elaboración)
- La alerta de alérgenos indica posible contaminación cruzada (SOJA Y MOSTAZA)
- La etiqueta usa márgenes internos de seguridad (área útil 64mm × 76mm) para evitar cortes en la Zebra ZD420
- La versión Node/Express (`server.js`, `generatePDF.js`) queda como legacy; la versión web es la activa

## 👥 Autor

LabelFresh — Generador de Etiquetas Alimentarias

## 📄 Licencia

ISC
