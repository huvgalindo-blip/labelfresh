# LabelFresh - Changelog

## Versión Actual: v1.0.0 - Multi-Marca (2026-06-20)

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
│   ├── index.html          # Aplicación web (versión actual)
│   └── .nojekyll           # Configuración GitHub Pages
├── logo/
│   └── LOGOTIPO_QUALITY_PIZZAFRESH_1.png
├── public/                 # Versión antigua (Node.js)
├── INSTALAR.bat            # Script instalación Windows
├── INICIAR.bat             # Script iniciar Windows
├── instalar.sh             # Script instalación Mac/Linux
├── iniciar.sh              # Script iniciar Mac/Linux
├── GUIA_RAPIDA.md          # Guía de uso
└── CHANGELOG.md            # Este archivo
```

### 🔗 Acceso

**Web (Recomendado):**
```
https://huvgalindo-blip.github.io/labelfresh/
```

**Local (Scripts):**
- Windows: `INSTALAR.bat`
- Mac/Linux: `bash instalar.sh`

---

## Historial de Versiones

### v1.0.0 - Multi-Marca (2026-06-20)
- ✅ Sistema de marcas multi-cliente
- ✅ Logos personalizables por URL
- ✅ Interfaz responsive con 3 paneles
- ✅ Campos completamente editables
- ✅ Rama de backup: `backup-v1-multimarca`

### v0.9.0 - Single Brand (2026-06-20)
- ✅ Versión inicial con Quality Pizzafresh
- ✅ Logo integrado
- ✅ Vista previa y PDF
- 📌 Rama: `master` (antes de v1.0.0)

---

## 🛠️ Ramas Disponibles

- **master**: Versión actual (v1.0.0 Multi-Marca)
- **backup-v1-multimarca**: Backup de v1.0.0 (punto de restauración)
- **gh-pages**: Configuración de GitHub Pages

---

## 📝 Notas de Desarrollo

Para realizar cambios o modificaciones:

1. Crear una nueva rama a partir de `backup-v1-multimarca`
2. Realizar cambios en la nueva rama
3. Probar en vista previa
4. Hacer merge a `master` cuando esté listo

### Ejemplo:

```bash
# Crear rama para nuevas funciones
git checkout -b feature/nueva-funcionalidad backup-v1-multimarca

# Hacer cambios y commit
git commit -m "Agregar nueva funcionalidad"

# Hacer merge a master cuando esté listo
git checkout master
git merge feature/nueva-funcionalidad
```

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

Desarrollo: 2026-06-20
