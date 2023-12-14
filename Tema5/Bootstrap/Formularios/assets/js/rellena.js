// Función para agregar filas a la tabla
function agregarFila() {
    // Capturar datos del formulario
    var nombre = document.getElementById("nombre").value;
    var descripcion = document.getElementById("descripcion").value;
    var fechaInicio = document.getElementById("fechaInicio").value;
    var fechaFin = document.getElementById("fechaFin").value;
    var tecnologias = document.getElementById("tecnologias").value;

    // Validar que se hayan ingresado datos
    if (!nombre || !descripcion || !fechaInicio || !fechaFin || !tecnologias) {
        alert("Por favor, complete todos los campos del formulario.");
        return;
    }

    // Crear una nueva fila
    var fila =
        "<tr><td>" +
        nombre +
        "</td><td>" +
        descripcion +
        "</td><td>" +
        fechaInicio +
        "</td><td>" +
        fechaFin +
        "</td><td>" +
        tecnologias +
        "</td></tr>";

    // Agregar la fila a la tabla
    document.getElementById("tablaBody").innerHTML += fila;

    // Limpiar el formulario después de agregar la fila
    document.getElementById("formulario").reset();
}
