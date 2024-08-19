
const radios = document.querySelectorAll('input[name="option"]');
const select = document.getElementById('mySelect');

radios.forEach(radio => {
    radio.addEventListener('change', function() {
        select.innerHTML = ''; // Limpia las opciones actuales del select

        if (this.value === 'Incidencia') {
            select.innerHTML = `
                 <option value="1">Canastilla o bulto faltante</option>
                 <option value="2">Canastilla o bulto no consolidado en su tarima (no especificado en mapa de carga)</option>
                 <option value="3">Etiquetas master faltantes o cambiadas</option>
                 <option value="4">Carga en secuencia invertida o mezclada</option>
                 <option value="5">Merma generada por tarima en mal estado (o clavos)</option>
                 <option value="6">Falta de playo en tarima</option>
                 <option value="7">Mercancía ladeada</option>
                 <option value="6">Canastillas comprimidas en área de termo</option>
                 <option value="7">Error en secuencia de entrega de canastillas refrigeradas</option>
                   `;
        } else if (this.value === 'Incumplimiento') {
            select.innerHTML = `
                <option value="8">Mala actitud del personal de tienda</option>
                <option value="9">Tiempo excesivo para la recepción del pedido</option>
                <option value="10">Tienda no quiere recibir el pedido</option>
                <option value="11">No tiene devolución preparada</option>
                <option value="12">Se solicita entrega a detalle (fuera de proceso)</option>
                <option value="13">No entrega canastillas/envases</option>

            `;
        } else if (this.value === 'NSPEntregar') {
            select.innerHTML = `
                <option value="14">Tienda cerrada</option>
                <option value="15"> No cuenta con factura/documentación completa</option>
                <option value="16">Sobreinventario en tienda</option>
                <option value="17">Remodelación</option>
                <option value="18">Pedido incompleto</option>
                <option value="19">Siniestro</option>
            `;
        } else if (this.value === 'Recomendación') {
        select.innerHTML = `
            <option value="20">Armado de ruta</option>
            <option value="21">Tiempo de salida</option>
            <option value="22">Etiquetas master incompletas</option>
            <option value="23">Papelería incompleta</option>
            <option value="24">Atención en devoluciones</option>
        `;
     }
    });
});