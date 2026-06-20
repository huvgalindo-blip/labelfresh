# Guía Rápida - LabelFresh

Instalación, uso básico y despliegue en otros equipos.

Repositorio oficial: [github.com/huvgalindo-blip/labelfresh](https://github.com/huvgalindo-blip/labelfresh)

---

## Inicio rápido (recomendado)

La forma más sencilla de usar LabelFresh es con el **lanzador incluido** en el repositorio:

| Sistema | Qué hacer |
|---------|-----------|
| **Windows** | Doble clic en **`Iniciar-LabelFresh.bat`** |
| **Mac** | Doble clic en **`Iniciar-LabelFresh.command`** |
| **Linux** | Ejecutar `./iniciar-labelfresh.sh` en terminal |

El lanzador hace todo automáticamente:

1. Comprueba que Node.js esté instalado (si no, muestra instrucciones).
2. Instala dependencias la **primera vez** (`npm install`).
3. Inicia el servidor.
4. Abre el navegador en `http://localhost:3000`.

> **Importante:** Mantén abierta la ventana negra (consola) mientras uses la app. Para cerrar LabelFresh, pulsa **Ctrl+C** en esa ventana.

### Requisito único: Node.js

Solo necesitas instalar Node.js **una vez** por equipo:

- Descarga LTS desde: https://nodejs.org/
- Instala con las opciones por defecto
- Después, siempre usa el lanzador (`.bat`, `.command` o `.sh`)

---

## Instalación manual (alternativa)

Si prefieres usar la terminal en lugar del lanzador:

### Paso 1: Descargar Node.js

- Ve a: https://nodejs.org/
- Descarga la versión **LTS** (recomendada)
- Instala Node.js con las opciones por defecto

### Paso 2: Descargar LabelFresh

**Opción A — ZIP (más fácil)**

1. Ve a: https://github.com/huvgalindo-blip/labelfresh
2. Haz clic en el botón verde **Code**
3. Selecciona **Download ZIP**
4. Descomprime el archivo en tu escritorio (o carpeta de trabajo)

**Opción B — Git (recomendada para varios equipos)**

```bash
git clone https://github.com/huvgalindo-blip/labelfresh.git
cd labelfresh
```

### Paso 3: Instalar y ejecutar

```bash
npm install
npm run launch
```

O, si ya instalaste dependencias antes:

```bash
npm start
```

Luego abre el navegador en: **http://localhost:3000**

---

## Tiempos estimados

| Paso | Tiempo aproximado |
|------|-------------------|
| Descargar Node.js | 5–10 min |
| Descargar LabelFresh | 1–2 min |
| `npm install` (primera vez) | 5–10 min |
| `npm start` | unos segundos |

> La primera instalación descarga Chromium (~170 MB), necesario para generar los PDF.

---

## Uso básico (resumen)

Una vez abierta la aplicación en el navegador:

1. **Idioma** — Elige español, portugués, francés o inglés (traduce las etiquetas fijas de la plantilla).
2. **Producto** — Selecciona una pizza predefinida o escribe uno personalizado.
3. **Ingredientes** — Edita la lista; incluye alérgenos entre paréntesis.
4. **Lote** — Introduce el número de lote (obligatorio).
5. **Fechas** — Elaboración y consumo preferente. Usa **Auto (+19d)** para calcular +19 días.
6. **Vista previa** — Comprueba la etiqueta en pantalla (68 mm × 80 mm).
7. **Generar PDF** — Descarga el archivo; también se guarda en `outputs/`.
8. **Imprimir** — Abre el PDF en una pestaña nueva para enviar a la impresora térmica.

Para el detalle completo de cada campo, botones y solución de problemas, consulta **[MANUAL_USUARIO.md](MANUAL_USUARIO.md)**.

---

## Usar LabelFresh en otros equipos

**Sí, puedes usar la aplicación en otros ordenadores** a partir del repositorio de GitHub. Cada equipo necesita su propia instalación local; LabelFresh no es una web pública en internet, sino una app que corre en cada PC.

### Escenario 1: Instalar en un equipo nuevo

En cada ordenador donde quieras imprimir etiquetas:

1. Instala **Node.js** (si no lo tiene) — solo una vez.
2. Clona o descarga el proyecto desde GitHub (ver arriba).
3. **Doble clic en `Iniciar-LabelFresh.bat`** (Windows) o el lanzador de tu sistema.
4. La primera vez instalará dependencias solo; las siguientes veces abrirá directamente.

No hace falta abrir terminal ni escribir comandos si usas el lanzador.

### Escenario 2: Mantener varios equipos actualizados

Si ya clonaste con Git y publicas cambios en GitHub:

```bash
cd labelfresh
git pull
npm install
npm start
```

- `git pull` trae la última versión del código.
- `npm install` solo hace falta si cambiaron dependencias en `package.json`.

### Escenario 3: Compartir sin Git

1. Sube los cambios al repositorio desde el equipo de desarrollo (`git push`).
2. En el otro equipo: descarga de nuevo el ZIP desde GitHub o ejecuta `git pull`.
3. Vuelve a ejecutar `npm install` si hubo cambios de dependencias.

### Requisitos en cada equipo

- Windows 10/11, macOS o Linux
- Node.js 14 o superior
- Conexión a internet **solo para la instalación inicial**
- Impresora térmica configurada a **68 mm × 80 mm** (opcional; también puedes guardar PDFs)

### Limitaciones importantes

- El servidor corre en **localhost**: solo es accesible desde el mismo PC donde ejecutas `npm start`.
- Los PDFs generados se guardan en la carpeta `outputs/` **de ese equipo**, no se sincronizan solos entre máquinas.
- Para usar la app desde varios PCs a la red local haría falta un despliegue adicional (no incluido por defecto).

---

## Solución rápida de problemas

| Problema | Qué hacer |
|----------|-----------|
| `npm install` falla | Reintenta con internet estable; comprueba `node --version` |
| Puerto 3000 en uso | Cierra otras apps o cambia `PORT` en `server.js` |
| No carga la página | Verifica que `npm start` sigue en ejecución |
| Error al generar PDF | Reinstala dependencias: `npm install` |
| Etiquetas sin textos traducidos | Actualiza a la última versión del repositorio |

---

## Documentación relacionada

- **[MANUAL_USUARIO.md](MANUAL_USUARIO.md)** — Guía de uso completa paso a paso
- **[README.md](README.md)** — Información técnica del proyecto
- **[Repositorio GitHub](https://github.com/huvgalindo-blip/labelfresh)** — Código fuente y actualizaciones

---

## Listo

Cuando en la terminal aparezca:

```
LabelFresh - Generador de Etiquetas
Servidor ejecutándose en: http://localhost:3000
```

la aplicación está lista para generar etiquetas.
