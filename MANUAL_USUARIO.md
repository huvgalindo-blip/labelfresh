# 📖 Manual de Usuario - LabelFresh

## 🎯 ¿Qué es LabelFresh?

LabelFresh es una aplicación web que genera **etiquetas alimentarias profesionales** en formato PDF para impresión térmica (68mm x 80mm). Es ideal para productos alimenticios que requieren etiquetado nutricional y de trazabilidad.

---

## 🚀 Primeros Pasos

### 1. Iniciar la aplicación

Si ya has instalado LabelFresh (ver GUIA_RAPIDA.md), simplemente:

```bash
npm start
```

Luego abre tu navegador en: `http://localhost:3000`

### 2. Interfaz de usuario

La aplicación se divide en dos paneles:
- **Panel izquierdo:** Formulario de datos
- **Panel derecho:** Vista previa de la etiqueta

---

## 📝 Guía de Uso Paso a Paso

### Paso 1: Seleccionar Idioma

1. Busca el campo **"Idioma / Language"**
2. Selecciona el idioma principal de tu etiqueta:
   - 🇪🇸 **Español (Castellano)** - Para mercado español
   - 🇵🇹 **Português** - Para mercado portugués/brasileño
   - 🇫🇷 **Français** - Para mercado francés
   - 🇬🇧 **English** - Para mercado internacional

**Nota:** La etiqueta generará automáticamente las traducciones en los 3 idiomas principales (ES, PT, FR) para cumplir con normativas europeas.

---

### Paso 2: Seleccionar Producto

1. Busca el campo **"Producto"**
2. Elige una de las opciones predefinidas:
   - Pizza Mediana 250g
   - Pizza Familiar 400g
   - Pizza Mini 150g
   - Pizza Grande 500g

3. **Opción personalizada:**
   - Si necesitas un producto diferente, selecciona **"Personalizado..."**
   - Aparecerá un campo de texto donde puedes escribir el nombre de tu producto
   - Ejemplo: "Empanada de Carne 300g (UNIDAD)"

---

### Paso 3: Especificar Peso (Opcional)

1. En el campo **"Peso"**, puedes agregar información adicional sobre el peso
2. Esto es opcional si ya incluyes el peso en el nombre del producto
3. Ejemplos:
   - "250g"
   - "400g (2 unidades)"
   - "1 kg"

---

### Paso 4: Ingredientes

1. En el campo **"Ingredientes"**, lista todos los ingredientes del producto
2. **Importante:** Debes incluir los alérgenos entre paréntesis
3. Formato recomendado:
   ```
   Harina de trigo (glúten), agua, sal, levadura, aceite de oliva, tomate, queso mozzarella (leche).
   ```

**Alérgenos comunes a declarar:**
- (glúten) - Trigo, centeno, cebada
- (leche) - Lácteos
- (soja) - Soja y derivados
- (huevos) - Huevos y derivados
- (pescado) - Pescado y mariscos
- (frutos de cáscara) - Nueces, almendras, etc.

---

### Paso 5: Número de Lote

1. En el campo **"Lote"**, ingresa el número de lote del producto
2. Este es un campo **obligatorio** para trazabilidad
3. Formatos recomendados:
   - `L-2024-001`
   - `L24031901`
   - `BATCH-2024-03-19`

**Consejo:** Usa un formato consistente para todos tus productos para facilitar el tracking.

---

### Paso 6: Fecha de Elaboración

1. En el campo **"Fecha Elaboración"**, selecciona la fecha de fabricación del producto
2. Por defecto, la aplicación establece la fecha actual
3. Puedes cambiarla haciendo clic en el campo y seleccionando la fecha correcta

---

### Paso 7: Fecha de Consumo Preferente

1. En el campo **"Fecha Consumo Preferente"**, establece la fecha límite de consumo
2. **Opción automática:** Haz clic en el botón **"📅 Auto (+19d)"**
   - Esto calculará automáticamente 19 días después de la fecha de elaboración
   - Es el estándar para muchos productos alimenticios

3. **Opción manual:** 
   - Haz clic en el campo de fecha
   - Selecciona la fecha deseada manualmente

---

## 🔘 Botones de Acción

### 👁️ Vista Previa

**¿Qué hace?** Muestra cómo quedará la etiqueta antes de generar el PDF

**Cuándo usarlo:**
- Antes de generar el PDF final
- Para verificar que todos los datos son correctos
- Para comprobar el diseño y formato

**Cómo usarlo:**
1. Completa todos los campos obligatorios
2. Haz clic en **"👁️ Vista Previa"**
3. La etiqueta aparecerá en el panel derecho
4. Verifica que toda la información sea correcta

---

### 📄 Generar PDF

**¿Qué hace?** Crea y descarga el archivo PDF de la etiqueta

**Cuándo usarlo:**
- Cuando la vista previa es correcta
- Para guardar el PDF en tu computadora
- Para imprimir posteriormente

**Cómo usarlo:**
1. Verifica la vista previa
2. Haz clic en **"📄 Generar PDF"**
3. Espera unos segundos (aparecerá "Generando PDF...")
4. El PDF se descargará automáticamente
5. El nombre del archivo incluirá el lote y timestamp: `etiqueta_L24031901_1780217156926.pdf`

**Ubicación del PDF:**
- También se guarda en la carpeta `outputs/` del proyecto
- Cada PDF tiene un nombre único para evitar sobrescrituras

---

### 🖨️ Imprimir

**¿Qué hace?** Abre el PDF en una nueva pestaña para impresión directa

**Cuándo usarlo:**
- Cuando necesitas imprimir inmediatamente
- Para verificar el PDF antes de imprimir
- Para enviar a una impresora de red

**Cómo usarlo:**
1. Haz clic en **"🖨️ Imprimir"**
2. El PDF se abrirá en una nueva pestaña del navegador
3. En la nueva pestaña:
   - Presiona `Ctrl + P` (Windows) o `Cmd + P` (Mac)
   - Selecciona tu impresora térmica
   - Asegúrate de que el tamaño sea 68mm x 80mm
   - Haz clic en "Imprimir"

---

## ⚙️ Configuración de Impresión

### Configuración recomendada para impresoras térmicas:

- **Tamaño papel:** 68mm x 80mm
- **Resolución:** 300 DPI
- **Tipo:** Impresión térmica directa
- **Orientación:** Horizontal
- **Márgenes:** Ninguno (0mm)

### Si no tienes impresora térmica:

Puedes imprimir en papel regular:
- Selecciona tamaño "A4" o "Carta"
- La etiqueta aparecerá en la esquina superior izquierda
- Recorta la etiqueta manualmente

---

## 🌐 Soporte de Idiomas

LabelFresh genera etiquetas con **3 idiomas simultáneos** para cumplir con normativas europeas:

### Idiomas incluidos:
1. **Español (ES)** - Columna izquierda
2. **Portugués (PT)** - Columna central  
3. **Francés (FR)** - Columna derecha

### Campos traducidos automáticamente:
- Ingredientes / Ingredientes / Ingrédients
- Lote / Lote / Lot
- Elab / Elab / Fab
- Consumir pref. / Consumir pref. / Consommer de préf.
- Información nutricional
- Conservación y cocción
- Alertas de alérgenos

### Idioma principal:
El idioma que seleccionas en el formulario determina el orden de las columnas y el idioma principal de la etiqueta.

---

## 📊 Campos de la Etiqueta

### Campos editables (tú los ingresas):
- ✅ Nombre del producto
- ✅ Peso
- ✅ Ingredientes
- ✅ Número de lote
- ✅ Fecha de elaboración
- ✅ Fecha de consumo preferente

### Campos fijos (predefinidos):
- 📋 Tabla nutricional estándar
- 🌡️ Información de conservación (0°C a 4°C)
- ❄️ Información de congelación (3 meses)
- 🔥 Información de cocción (Horno 200-300°C)
- ⚠️ Alerta de alérgenos (SOJA Y MOSTAZA)
- 🏭 Datos del fabricante

---

## ⚠️ Mensajes de Error y Soluciones

### "Seleccione un producto"
**Causa:** No has seleccionado un producto del menú
**Solución:** Selecciona un producto o escribe uno personalizado

### "Ingrese los ingredientes"
**Causa:** El campo de ingredientes está vacío
**Solución:** Ingresa al menos los ingredientes principales

### "Ingrese el número de lote"
**Causa:** El campo de lote está vacío
**Solución:** Ingresa un número de lote (ej: L-2024-001)

### "Seleccione la fecha de elaboración"
**Causa:** No has seleccionado fecha de elaboración
**Solución:** Haz clic en el campo y selecciona una fecha

### "Seleccione la fecha de consumo preferente"
**Causa:** No has seleccionado fecha de consumo
**Solución:** Usa el botón "Auto (+19d)" o selecciona manualmente

### "Error al generar PDF"
**Causa:** Problema con el servidor o Puppeteer
**Solución:** 
1. Verifica que el servidor esté corriendo (`npm start`)
2. Revisa que la carpeta `outputs/` tenga permisos de escritura
3. Intenta recargar la página

---

## 💡 Consejos y Buenas Prácticas

### Para productos consistentes:
1. **Usa formatos de lote estandarizados:** `L-YYYY-NNN`
2. **Mantén consistencia en nombres de productos:** "Pizza Mediana 250g" siempre igual
3. **Verifica ingredientes antes de generar:** La vista previa es tu mejor amigo

### Para trazabilidad:
1. **Guarda los PDFs:** Cada archivo tiene nombre único con lote y fecha
2. **Mantén un registro:** Anota qué lote corresponde a qué producción
3. **Usa fechas reales:** No uses fechas futuras para elaboración

### Para impresión:
1. **Calibra tu impresora:** Primera impresión de prueba
2. **Verifica márgenes:** Asegúrate de que no se corte contenido
3. **Usa papel térmico de calidad:** Mejor durabilidad y legibilidad

---

## 🔧 Solución de Problemas Comunes

### El servidor no inicia
**Síntoma:** Error al ejecutar `npm start`
**Solución:**
1. Verifica que Node.js esté instalado: `node --version`
2. Reinstala dependencias: `npm install`
3. Verifica que el puerto 3000 esté libre

### La página no carga
**Síntoma:** Error al abrir `http://localhost:3000`
**Solución:**
1. Verifica que el servidor esté corriendo
2. Revisa la consola del navegador (F12)
3. Intenta recargar la página

### El PDF no se descarga
**Síntoma:** Click en "Generar PDF" pero no descarga
**Solución:**
1. Verifica permisos de descarga en el navegador
2. Revisa la carpeta `outputs/` en el proyecto
3. Intenta con otro navegador

### La impresión sale mal
**Síntoma:** Etiqueta cortada o desalineada
**Solución:**
1. Verifica configuración de impresora (68mm x 80mm)
2. Ajusta márgenes a 0mm
3. Calibra impresora térmica

---

## 📱 Atajos de Teclado

- **Tab:** Avanzar al siguiente campo
- **Shift + Tab:** Retroceder al campo anterior
- **Enter:** En formularios, puede enviar (no recomendado aquí)
- **Ctrl + P:** Imprimir (cuando el PDF está abierto)

---

## 🔄 Flujo de Trabajo Recomendado

### Para producción diaria:
1. **Iniciar servidor:** `npm start` (una vez al día)
2. **Preparar datos:** Ten lista la info del producto
3. **Completar formulario:** Producto → Ingredientes → Lote → Fechas
4. **Vista previa:** Verificar antes de generar
5. **Generar PDF:** Descargar archivo
6. **Imprimir:** Enviar a impresora térmica
7. **Repetir:** Para siguiente producto

### Para nuevos productos:
1. **Definir producto:** Crea nombre y peso estándar
2. **Listar ingredientes:** Sé específico con alérgenos
3. **Prueba:** Genera etiqueta de prueba
4. **Verificar:** Imprime y revisa
5. **Guardar:** Guarda configuración para futuro

---

## 📞 Ayuda Adicional

### Documentación disponible:
- **GUIA_RAPIDA.md:** Instalación rápida
- **README.md:** Información técnica del proyecto
- **MANUAL_USUARIO.md:** Este documento

### Recursos en línea:
- [Repositorio GitHub](https://github.com/huvgalindo-blip/labelfresh)
- [Normativa etiquetado UE](https://ec.europa.eu/food/safety/labelling-nutrition/labeling-requirements_en)

---

## ✅ Checklist Antes de Imprimir

Antes de imprimir tu etiqueta final, verifica:

- [ ] Producto correcto
- [ ] Peso especificado
- [ ] Ingredientes completos y con alérgenos
- [ ] Número de lote correcto
- [ ] Fecha de elaboración correcta
- [ ] Fecha de consumo calculada (+19 días)
- [ ] Vista previa verificada
- [ ] Impresora configurada (68mm x 80mm)
- [ ] Papel térmico cargado

---

## 🎓 Conclusión

LabelFresh está diseñado para ser **simple y eficiente**. Con estos pasos, puedes generar etiquetas profesionales en segundos. Si tienes problemas, revisa la sección de solución de problemas o consulta el README.md para información técnica.

**¡Feliz etiquetado! 🏷️**
