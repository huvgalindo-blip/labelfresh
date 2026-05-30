/**
 * LabelFresh - Script principal
 * Maneja la lógica del frontend para generar etiquetas alimentarias
 */

// Elementos del DOM
const productoSelect = document.getElementById('producto');
const productoCustom = document.getElementById('productoCustom');
const pesoInput = document.getElementById('peso');
const ingredientesInput = document.getElementById('ingredientes');
const loteInput = document.getElementById('lote');
const fechaElabInput = document.getElementById('fechaElab');
const fechaConsumoInput = document.getElementById('fechaConsumo');
const autoCalcFechaBtn = document.getElementById('autoCalcFecha');
const btnPreview = document.getElementById('btnPreview');
const btnGenerar = document.getElementById('btnGenerar');
const btnImprimir = document.getElementById('btnImprimir');
const previewContainer = document.getElementById('previewContainer');
const statusMessage = document.getElementById('statusMessage');

/**
 * Manejar cambio en el selector de producto
 */
productoSelect.addEventListener('change', function() {
  if (this.value === 'CUSTOM') {
    productoCustom.style.display = 'block';
    productoCustom.required = true;
    productoCustom.focus();
  } else {
    productoCustom.style.display = 'none';
    productoCustom.required = false;
    productoCustom.value = '';
  }
});

/**
 * Calcular fecha de consumo preferente automáticamente (+19 días)
 */
autoCalcFechaBtn.addEventListener('click', function() {
  const fechaElab = new Date(fechaElabInput.value);
  
  if (!fechaElabInput.value || isNaN(fechaElab.getTime())) {
    showStatus('Seleccione primero la fecha de elaboración', 'warning');
    return;
  }
  
  // Sumar 19 días
  const fechaConsumo = new Date(fechaElab);
  fechaConsumo.setDate(fechaConsumo.getDate() + 19);
  
  // Formatear como YYYY-MM-DD
  const fechaConsumoStr = fechaConsumo.toISOString().split('T')[0];
  fechaConsumoInput.value = fechaConsumoStr;
  
  showStatus('Fecha de consumo calculada: +19 días', 'success');
});

/**
 * Mostrar vista previa de la etiqueta
 */
btnPreview.addEventListener('click', async function() {
  if (!validateForm()) {
    return;
  }
  
  const data = getFormData();
  
  try {
    showStatus('Generando vista previa...', 'info');
    btnPreview.classList.add('loading');
    
    // Generar HTML de vista previa
    const previewHTML = await generatePreviewHTML(data);
    
    // Mostrar en el contenedor
    previewContainer.innerHTML = previewHTML;
    
    showStatus('Vista previa generada correctamente', 'success');
  } catch (error) {
    console.error('Error generando vista previa:', error);
    showStatus('Error al generar vista previa: ' + error.message, 'danger');
  } finally {
    btnPreview.classList.remove('loading');
  }
});

/**
 * Generar PDF
 */
btnGenerar.addEventListener('click', async function() {
  if (!validateForm()) {
    return;
  }
  
  const data = getFormData();
  
  try {
    showStatus('Generando PDF...', 'info');
    btnGenerar.classList.add('loading');
    
    // Enviar datos al servidor
    const response = await fetch('/api/generar', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    
    const result = await response.json();
    
    if (response.ok && result.success) {
      // Descargar PDF
      const pdfUrl = result.pdfUrl;
      const link = document.createElement('a');
      link.href = pdfUrl;
      link.download = result.filename;
      link.click();
      
      showStatus('PDF generado y descargado: ' + result.filename, 'success');
    } else {
      throw new Error(result.error || 'Error desconocido');
    }
  } catch (error) {
    console.error('Error generando PDF:', error);
    showStatus('Error al generar PDF: ' + error.message, 'danger');
  } finally {
    btnGenerar.classList.remove('loading');
  }
});

/**
 * Imprimir etiqueta
 */
btnImprimir.addEventListener('click', async function() {
  if (!validateForm()) {
    return;
  }
  
  const data = getFormData();
  
  try {
    showStatus('Preparando impresión...', 'info');
    btnImprimir.classList.add('loading');
    
    // Primero generar el PDF
    const response = await fetch('/api/generar', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    
    const result = await response.json();
    
    if (response.ok && result.success) {
      // Abrir PDF en nueva pestaña para impresión
      const pdfUrl = result.pdfUrl;
      window.open(pdfUrl, '_blank');
      
      showStatus('PDF abierto para impresión', 'success');
    } else {
      throw new Error(result.error || 'Error desconocido');
    }
  } catch (error) {
    console.error('Error preparando impresión:', error);
    showStatus('Error al preparar impresión: ' + error.message, 'danger');
  } finally {
    btnImprimir.classList.remove('loading');
  }
});

/**
 * Validar formulario
 */
function validateForm() {
  const producto = productoSelect.value === 'CUSTOM' ? productoCustom.value : productoSelect.value;
  
  if (!producto) {
    showStatus('Seleccione un producto', 'warning');
    return false;
  }
  
  if (!ingredientesInput.value.trim()) {
    showStatus('Ingrese los ingredientes', 'warning');
    return false;
  }
  
  if (!loteInput.value.trim()) {
    showStatus('Ingrese el número de lote', 'warning');
    return false;
  }
  
  if (!fechaElabInput.value) {
    showStatus('Seleccione la fecha de elaboración', 'warning');
    return false;
  }
  
  if (!fechaConsumoInput.value) {
    showStatus('Seleccione la fecha de consumo preferente', 'warning');
    return false;
  }
  
  return true;
}

/**
 * Obtener datos del formulario
 */
function getFormData() {
  const producto = productoSelect.value === 'CUSTOM' ? productoCustom.value : productoSelect.value;
  
  return {
    producto: producto,
    peso: pesoInput.value.trim(),
    ingredientes: ingredientesInput.value.trim(),
    lote: loteInput.value.trim(),
    fechaElab: formatDate(fechaElabInput.value),
    fechaConsumo: formatDate(fechaConsumoInput.value)
  };
}

/**
 * Formatear fecha de YYYY-MM-DD a DD/MM/YYYY
 */
function formatDate(dateStr) {
  if (!dateStr) return '';
  const parts = dateStr.split('-');
  return `${parts[2]}/${parts[1]}/${parts[0]}`;
}

/**
 * Generar HTML de vista previa
 */
async function generatePreviewHTML(data) {
  // Leer plantilla
  const response = await fetch('/template.html');
  let html = await response.text();
  
  // Reemplazar marcadores
  for (const [key, value] of Object.entries(data)) {
    const placeholder = `{{${key}}}`;
    html = html.replace(new RegExp(placeholder, 'g'), value || '');
  }
  
  // Envolver en contenedor con estilos de vista previa
  return `
    <div class="label-preview">
      ${html}
    </div>
  `;
}

/**
 * Mostrar mensaje de estado
 */
function showStatus(message, type) {
  statusMessage.className = `alert alert-${type}`;
  statusMessage.textContent = message;
  statusMessage.style.display = 'block';
  
  // Ocultar automáticamente después de 5 segundos para mensajes de éxito
  if (type === 'success') {
    setTimeout(() => {
      statusMessage.style.display = 'none';
    }, 5000);
  }
}

/**
 * Inicialización: establecer fecha de hoy por defecto
 */
document.addEventListener('DOMContentLoaded', function() {
  const today = new Date().toISOString().split('T')[0];
  fechaElabInput.value = today;
  
  // Calcular fecha de consumo por defecto (+19 días)
  const fechaConsumo = new Date();
  fechaConsumo.setDate(fechaConsumo.getDate() + 19);
  fechaConsumoInput.value = fechaConsumo.toISOString().split('T')[0];
});
