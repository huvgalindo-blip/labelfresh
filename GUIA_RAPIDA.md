# 🚀 LabelFresh - Guía Rápida de Instalación

## ⚡ Instalación Automática (¡La forma más fácil!)

### Para **Windows** 🪟

1. **Descargar el proyecto:**
   - Ve a: https://github.com/huvgalindo-blip/labelfresh
   - Haz clic en botón verde **"Code"**
   - Selecciona **"Download ZIP"**
   - Espera a que se descargue

2. **Descomprimir:**
   - Haz clic derecho en el archivo ZIP
   - Selecciona **"Extraer todo"** o **"Descomprimir"**
   - Elige una carpeta (ej: Escritorio)

3. **Ejecutar instalador:**
   - Abre la carpeta descomprimida
   - **Haz doble clic en: `INSTALAR.bat`**
   - ¡Listo! Se abrirá automáticamente

4. **Usar la aplicación:**
   - Se abrirá en tu navegador automáticamente
   - Si no se abre, ve a: http://localhost:3000

5. **Para iniciar de nuevo:**
   - **Haz doble clic en: `INICIAR.bat`**

---

### Para **Mac** 🍎

1. **Descargar el proyecto:**
   - Ve a: https://github.com/huvgalindo-blip/labelfresh
   - Haz clic en botón verde **"Code"**
   - Selecciona **"Download ZIP"**

2. **Descomprimir:**
   - Haz doble clic en el archivo ZIP descargado

3. **Abrir Terminal:**
   - Abre la carpeta descomprimida
   - Presiona **Cmd + Espacio**
   - Escribe: `Terminal`
   - Abre Terminal

4. **Ejecutar en Terminal:**
   ```bash
   cd
   ```
   - Arrastra la carpeta de LabelFresh a la terminal
   - Presiona Enter

5. **Instalar automáticamente:**
   ```bash
   bash instalar.sh
   ```
   - Presiona Enter
   - Responde "s" cuando pregunte si iniciar

6. **Para iniciar de nuevo:**
   ```bash
   bash iniciar.sh
   ```

---

### Para **Linux** 🐧

1. **Descargar el proyecto:**
   - Ve a: https://github.com/huvgalindo-blip/labelfresh
   - Haz clic en botón verde **"Code"**
   - Selecciona **"Download ZIP"**

2. **Descomprimir:**
   - Haz clic derecho → "Extraer aquí"

3. **Abrir Terminal:**
   - Haz clic derecho en la carpeta
   - Selecciona **"Abrir en terminal"**

4. **Ejecutar instalador:**
   ```bash
   bash instalar.sh
   ```
   - Presiona Enter
   - Responde "s" cuando pregunte si iniciar

5. **Para iniciar de nuevo:**
   ```bash
   bash iniciar.sh
   ```

---

## ⚠️ Requisitos previos

Antes de empezar, **DEBE tener Node.js instalado**:

### 📥 Descargar Node.js

1. Ve a: https://nodejs.org/
2. Haz clic en **"LTS"** (Versión recomendada)
3. Descarga e instala normalmente
4. Reinicia tu computadora

**Verificar que está instalado:**
- **Windows:** Abre CMD y escribe: `node --version`
- **Mac/Linux:** Abre Terminal y escribe: `node --version`

---

## 🎯 ¿Qué hace el instalador automático?

✅ Verifica que Node.js está instalado  
✅ Descarga todas las dependencias necesarias  
✅ Crea la carpeta de salida de PDFs  
✅ Inicia el servidor automáticamente  
✅ Abre la aplicación en tu navegador  

**¡Todo en un solo clic!**

---

## 🐛 Solución de problemas

### "Node.js no está instalado"
- Descarga e instala desde: https://nodejs.org/
- Reinicia tu computadora
- Vuelve a ejecutar el instalador

### "El navegador no se abre"
- Abre manualmente: http://localhost:3000
- O usa Chrome, Firefox, Safari, Edge

### "Puerto 3000 en uso"
- Si ya tienes otra aplicación usando el puerto 3000
- Cambia el puerto editando `server.js` (línea 7)

### "Permisos denegados" (Mac/Linux)
- Ejecuta con sudo:
```bash
sudo bash instalar.sh
```

---

## 📞 ¿Necesita ayuda?

Si la aplicación ya está instalada y funcionando, simplemente:

**Windows:** Haz doble clic en `INICIAR.bat`  
**Mac/Linux:** Ejecuta `bash iniciar.sh`

¡Disfruta de LabelFresh! 🎉