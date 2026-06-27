# LabelFresh - Changelog

## Versión Actual: v1.1.0 - Zebra ZD420 / GitHub Pages (2026-06-27)

### ✨ Cambios principales

- **Plataforma única:** `docs/index.html` es la única versión activa. La versión local Node/Express (`server.js`, `generatePDF.js`, `public/`) queda como legacy y no se mantiene.
- **Impresión corregida para Zebra ZD420 203 dpi:**
  - Añadido `@page { size: 68mm 80mm; margin: 0; }` en la plantilla de etiqueta para que la impresión y el PDF respeten el tamaño exacto.
  - Área útil interna de **64mm × 76mm** con margen de seguridad de 2mm para evitar cortes en la impresora térmica.
  - Reducidos paddings, márgenes verticales y tamaños de tipografía en header, ingredientes, tabla nutricional, lote/fechas, info extra, alerta de alérgenos y fabricante.
- **Vista previa corregida:** los estilos de la vista previa ahora están correctamente aislados bajo `.label-preview .xxx` para que no entren en conflicto con los estilos globales de la app y representen fielmente el resultado de impresión.
- **Exportación PDF mejorada:** la función `downloadPDF()` ahora preserva el CSS de la etiqueta al generar el PDF (anteriormente se perdía el bloque `<style>`).
- **Documentación actualizada:** README y CHANGELOG reflejan el nuevo enfoque con GitHub Pages como única plataforma activa.

### 🎯 Acceso

**Web (versión activa):**
```
https://huvgalindo-blip.github.io/labelfresh/
```

---

## v1.0.0 - Multi-Marca (2026-06-20)

### ✨ Características

- **Selector de Marcas**: Selecciona entre marcas predefinidas o usa una personalizada
- **Logos Personalizables**: Carga logos de otras marcas usando URL
- **Campos Editables Completos**:
  - Marca y nombre
  - Producto y peso
  - Ingredientes
  - Lote y fechas
  - Conservación (temperatura, congelación, cocción)
  - Información del fabricante (nombre, RGSEAA)
  - Alérgenos (contiene y alerta de contaminación cruzada)

- **Generación de Etiquetas**:
  - Vista previa en tiempo real
  - Descarga en PDF (68mm x 80mm)
  - Impresión directa
  - Compatible con impresoras térmicas

### 🎯 Marcas Disponibles

1. **Quality Pizzafresh** (predefinida)
2. **Personalizado** - Agregar cualquier marca con tu logo

### 📁 Estructura

```
labelfresh/
├── docs/
│   ├── index.html          # ✅ Aplicación web (versión activa)
│   └── .nojekyll
├── logo/
│   └── LOGOTIPO_QUALITY_PIZZAFRESH_1.png
├── CHANGELOG.md
└── README.md
```

### 🔗 Acceso

**Web (Recomendado):**
```
https://huvgalindo-blip.github.io/labelfresh/
```

---

## Historial de Versiones

- **v1.1.0** (2026-06-27): Ajuste impresión Zebra ZD420 203 dpi, migración a GitHub Pages como versión única activa
- **v1.0.0** (2026-06-20): Sistema de marcas multi-cliente, logos personalizables
- **v0.9.0** (2026-06-20): Versión inicial con Quality Pizzafresh

---

## 🛠️ Ramas Disponibles

- **master**: Versión actual (v1.1.0)
- **backup-v1-multimarca**: Backup de v1.0.0 (punto de restauración)

---

## 📝 Notas de Desarrollo

La aplicación vive en `docs/index.html` y se publica automáticamente en GitHub Pages con cada push a `master`. Para realizar cambios:

1. Editar `docs/index.html` directamente o en una rama nueva
2. Probar en vista previa local abriendo el archivo en un navegador
3. Hacer merge a `master` — GitHub Pages se actualiza automáticamente

---

## 🐛 Conocidos / Futuras Mejoras

- [ ] Agregar más marcas predefinidas
- [ ] Sistema de plantillas de diseño
- [ ] Guardar configuraciones de usuario
- [ ] Soporte para múltiples idiomas
- [ ] Base de datos de productos
- [ ] API para integración externa

---

## 👨‍💻 Autor

**LabelFresh** - Generador de Etiquetas Alimentarias Personalizables

Desarrollo: 2026-06-20 / Actualización: 2026-06-27
