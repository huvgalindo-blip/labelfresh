const express = require('express');
const generateEtiqueta = require('./generatePDF');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.static('public'));

// Ruta para la plantilla usada en vista previa del frontend
app.get('/template.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'template.html'));
});

// Ruta para servir archivos estáticos de outputs
app.use('/outputs', express.static(path.join(__dirname, 'outputs')));

/**
 * POST /api/generar
 * Genera un PDF de etiqueta basado en los datos proporcionados
 */
app.post('/api/generar', async (req, res) => {
  try {
    const { 
      producto, 
      ingredientes, 
      lote, 
      fechaElab, 
      fechaConsumo,
      peso 
    } = req.body;

    // Validación básica
    if (!producto || !lote || !fechaElab || !fechaConsumo) {
      return res.status(400).json({ 
        error: 'Faltan campos obligatorios: producto, lote, fechaElab, fechaConsumo' 
      });
    }

    // Generar nombre de archivo único
    const filename = `etiqueta_${lote}_${Date.now()}.pdf`;
    const outputPath = path.join(__dirname, 'outputs', filename);

    // Datos para reemplazar en la plantilla
    const data = {
      PRODUCTO_NOMBRE: producto,
      PRODUCTO_PESO: peso || '',
      INGREDIENTES: ingredientes,
      LOTE: lote,
      FECHA_ELABORACION: fechaElab,
      FECHA_CONSUMO: fechaConsumo
    };

    // Generar PDF
    await generateEtiqueta(data, outputPath);

    // Responder con URL del PDF generado
    res.json({ 
      success: true,
      pdfUrl: `/outputs/${filename}`,
      filename: filename
    });

  } catch (error) {
    console.error('Error generando etiqueta:', error);
    res.status(500).json({ 
      error: 'Error al generar la etiqueta',
      details: error.message 
    });
  }
});

/**
 * GET /api/health
 * Endpoint de verificación de salud del servidor
 */
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Servidor funcionando correctamente' });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`========================================`);
  console.log(`LabelFresh - Generador de Etiquetas`);
  console.log(`Servidor ejecutándose en: http://localhost:${PORT}`);
  console.log(`========================================`);
});
