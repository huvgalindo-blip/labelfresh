# LabelFresh - Generador de Etiquetas Alimentarias

Aplicación web para generar etiquetas alimentarias en formato PDF para impresión térmica (68mm x 80mm).

## 📋 Características

- ✅ Generación de PDFs profesionales con Puppeteer
- ✅ Tamaño exacto: 68mm x 80mm (impresión térmica)
- ✅ Soporte para múltiples productos
- ✅ Campos editables: producto, ingredientes, lote, fechas
- ✅ Cálculo automático de fecha de consumo (+19 días)
- ✅ Vista previa en pantalla
- ✅ Interfaz responsive con Bootstrap 5
- ✅ Soporte multiidioma (ES, PT, FR, EN) en etiquetas fijas
- ✅ Estándares W3C

## 🚀 Instalación Rápida (Guía para usuarios no técnicos)

### Requisitos previos:
- **Node.js** (versión 14 o superior) - [Descargar aquí](https://nodejs.org/)
- **Git** (opcional) - [Descargar aquí](https://git-scm.com/downloads)
- **Conexión a internet** (para descargar dependencias)

### Opción 1: Descargar directamente (Más fácil)

1. **Descargar el proyecto:**
   - Ve a: https://github.com/huvgalindo-blip/labelfresh
   - Haz clic en el botón verde "Code"
   - Selecciona "Download ZIP"
   - Espera a que se descargue el archivo comprimido

2. **Descomprimir el archivo:**
   - Haz clic derecho en el archivo ZIP descargado
   - Selecciona "Extraer todo" o "Descomprimir"
   - Elige una ubicación fácil de recordar (por ejemplo, Escritorio)

3. **Abrir terminal en la carpeta:**
   - **Windows:** Abre la carpeta descomprimida, haz clic en la barra de dirección, escribe `cmd` y presiona Enter
   - **Mac:** Abre la carpeta, presiona Cmd + Espacio, escribe "Terminal", abre la terminal y escribe `cd` seguido de un espacio, luego arrastra la carpeta a la terminal
   - **Linux:** Abre la terminal en la carpeta (clic derecho → "Abrir en terminal")

4. **Instalar dependencias:**
   ```bash
   npm install
   ```
   - **Nota:** Este proceso puede tardar varios minutos (5-10 minutos) la primera vez
   - Descargará automáticamente Chromium (~170MB) necesario para generar PDFs
   - Si aparece algún error, intenta ejecutar el comando nuevamente

5. **Iniciar la aplicación:**
   ```bash
   npm start
   ```

6. **Abrir en el navegador:**
   - Abre tu navegador web (Chrome, Firefox, Edge, etc.)
   - Escribe: `http://localhost:3000`
   - ¡Listo! Ya puedes usar la aplicación

### Opción 2: Usar Git (Para usuarios técnicos)

```bash
git clone https://github.com/huvgalindo-blip/labelfresh.git
cd labelfresh
npm install
npm start
```

Luego abre: `http://localhost:3000`

> **Guías de uso:** [GUIA_RAPIDA.md](GUIA_RAPIDA.md) (instalación y despliegue) · [MANUAL_USUARIO.md](MANUAL_USUARIO.md) (uso completo)

## 🖥️ Usar en otros equipos

**Sí, puedes instalar LabelFresh en varios ordenadores** desde el repositorio [github.com/huvgalindo-blip/labelfresh](https://github.com/huvgalindo-blip/labelfresh).

En cada equipo:

```bash
git clone https://github.com/huvgalindo-blip/labelfresh.git
cd labelfresh
npm install    # solo la primera vez
npm start
```

Para actualizar un equipo existente: `git pull`, luego `npm install` (si cambió `package.json`) y `npm start`.

Cada instalación es **independiente**: corre en `localhost:3000` del PC local y guarda los PDF en su propia carpeta `outputs/`. Ver [GUIA_RAPIDA.md](GUIA_RAPIDA.md) para escenarios detallados (ZIP, Git, varios puestos de producción).

## 📁 Estructura del Proyecto

```
labelfresh/
├── server.js              # Servidor Express
├── generatePDF.js         # Módulo de generación PDF con Puppeteer
├── package.json           # Dependencias
├── GUIA_RAPIDA.md         # Instalación y uso básico
├── MANUAL_USUARIO.md      # Manual completo de usuario
├── public/
│   ├── index.html         # Interfaz de usuario
│   ├── template.html      # Plantilla base de la etiqueta
│   ├── style.css          # Estilos adicionales
│   └── script.js          # Lógica frontend
└── outputs/               # Carpeta donde se guardan los PDFs
```

## 🎯 Uso

### Generar una etiqueta:

1. **Seleccionar idioma** (ES, PT, FR o EN) para las etiquetas fijas de la plantilla
2. **Seleccionar producto** del menú desplegable o escribir uno personalizado
2. **Editar ingredientes** si es necesario
3. **Ingresar lote** (ej: L-2024-001)
4. **Seleccionar fecha de elaboración**
5. **Calcular fecha de consumo** automáticamente (+19 días) o seleccionarla manualmente
6. **Vista previa** - Ver la etiqueta en pantalla
7. **Generar PDF** - Descargar el archivo PDF
8. **Imprimir** - Abrir el PDF para impresión

### Campos editables:
- Producto (nombre y peso)
- Ingredientes
- Lote
- Fecha elaboración
- Fecha consumo preferente

### Campos fijos:
- Tabla nutricional
- Información de conservación y cocción
- Datos del fabricante
- Alerta de alérgenos (SOJA Y MOSTAZA)

## 🔧 Tecnologías

- **Node.js** - Entorno de ejecución
- **Express** - Servidor web
- **Puppeteer** - Generación de PDF
- **Bootstrap 5** - Interfaz responsive
- **HTML5 / CSS3** - Estructura y estilos
- **JavaScript ES6+** - Lógica frontend

## 📝 Dependencias

```json
{
  "express": "^4.18.2",
  "puppeteer": "^21.5.0",
  "cors": "^2.8.5"
}
```

## 🖨️ Configuración de Impresión

- **Tamaño:** 68mm x 80mm
- **Resolución:** 300 DPI recomendada
- **Tipo:** Impresión térmica
- **Formato:** PDF

## ⚠️ Notas

- Los PDFs se guardan en la carpeta `outputs/`
- Cada PDF tiene un nombre único basado en el lote y timestamp
- La fecha de consumo preferente se calcula automáticamente (+19 días desde elaboración)
- La alerta de alérgenos indica posible contaminación cruzada

## 🐛 Solución de problemas

### Error al generar PDF:
- Verificar que Puppeteer se instaló correctamente
- Revisar que la carpeta `outputs/` tenga permisos de escritura

### Puerto en uso:
- Cambiar el puerto en `server.js` (línea 9: `const PORT = 3000;`)

## 📄 Licencia

ISC

## 👥 Autor

LabelFresh
