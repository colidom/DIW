// Al cargar la página
window.onload = function () {
    var datosGuardados = obtenerDatosGuardados();
    if (datosGuardados) {
        document.getElementById("tablaBody").innerHTML = datosGuardados;
    } else {
        // Si no hay datos guardados, se configura la fecha de hoy
        document.getElementById("fechaInicio").value = obtenerFechaHoy();
        document.getElementById("fechaFin").value = obtenerFechaHoy();
    }
};

// Función para obtener los datos guardados en la cookie
function obtenerDatosGuardados() {
    var cookies = document.cookie.split("; ");
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].split("=");
        if (cookie[0] === "datosTabla") {
            return cookie[1];
        }
    }
    return null;
}

// Función para agregar fila a la tabla
function agregarFila() {
    var nombre = document.getElementById("nombre").value;
    var descripcion = document.getElementById("descripcion").value;
    var fechaInicio = document.getElementById("fechaInicio").value;
    var fechaFin = document.getElementById("fechaFin").value;
    var tecnologias = document.getElementById("tecnologias").value;

    if (!nombre || !descripcion || !fechaInicio || !fechaFin || !tecnologias) {
        alert("Por favor, complete todos los campos del formulario.");
        return;
    }

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

    document.getElementById("tablaBody").innerHTML += fila;
    document.getElementById("formulario").reset();
}

// Función para agregar fila a la tabla y guardar en cookie por 5 minutos
function agregarFilaYGuardarEnCookie() {
    var nombre = document.getElementById("nombre").value;
    var descripcion = document.getElementById("descripcion").value;
    var fechaInicio = document.getElementById("fechaInicio").value;
    var fechaFin = document.getElementById("fechaFin").value;
    var tecnologias = document.getElementById("tecnologias").value;

    if (!nombre || !descripcion || !fechaInicio || !fechaFin || !tecnologias) {
        alert("Por favor, complete todos los campos del formulario.");
        return;
    }

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

    document.getElementById("tablaBody").innerHTML += fila;
    document.getElementById("formulario").reset();

    var datosTabla = document.getElementById("tablaBody").innerHTML;
    document.cookie = "datosTabla=" + datosTabla + "; max-age=300"; // 300 segundos = 5 minutos
}

// Función para limpiar la cookie y recargar la página
function limpiarCookieYRecargarPagina() {
    document.cookie = "datosTabla=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    alert("Cookie borrada, haga click en aceptar para recargar la página!");
    location.reload();
}

// Función para obtener la fecha de hoy en formato YYYY-MM-DD
function obtenerFechaHoy() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); // Enero es 0!
    var yyyy = today.getFullYear();

    return yyyy + "-" + mm + "-" + dd;
}
