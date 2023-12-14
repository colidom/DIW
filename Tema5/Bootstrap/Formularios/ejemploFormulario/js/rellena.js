// Función para agregar filas a la tabla
function agregarFila() {
    // Capturar datos del formulario
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
  
    // Validar que se hayan ingresado datos
    if (!nombre || !apellido) {
      alert("Por favor, complete todos los campos del formulario.");
      return;
    }
  
    // Crear una nueva fila
    var fila = "<tr><td>" + nombre + "</td><td>" + apellido + "</td></tr>";
  
    // Agregar la fila a la tabla
    document.getElementById("tablaBody").innerHTML += fila;
  
    // Limpiar el formulario después de agregar la fila
    document.getElementById("formulario").reset();
  }
  