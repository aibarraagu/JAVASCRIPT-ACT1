function alternarLuz() {
    // 1. Capturamos el elemento de la luz por su ID
    let luz = document.getElementById("luz-salon");

    // 2. Usamos toggle para añadir/quitar la clase 'encendido'
    luz.classList.toggle("encendido");
}
function activarAlarma() {
    let alarma = document.getElementById("alarma");

    // Forzamos que se añada la clase
    alarma.classList.add("peligro");
    alarma.innerText = "¡ALARMA ACTIVADA!";
}

function desactivarAlarma() {
    let alarma = document.getElementById("alarma");

    // Forzamos que se quite la clase
    alarma.classList.remove("peligro");
    alarma.innerText = "Alarma Desactivada";
}

function subirTemperatura() {
    let termostato = document.getElementById("termostato");
    let mensaje = document.getElementById("mensaje-termostato");

    // Preguntamos: ¿El termostato TIENE la clase 'eco'?
    if (termostato.classList.contains("eco")) {
        // Si la tiene, bloqueamos la acción y mostramos error
        mensaje.innerText = "Error: Desactiva el modo ECO primero.";
    } else {
        // Si no la tiene, permitimos la acción
        mensaje.innerText = ""; // Limpiamos errores
        termostato.innerText = "Temperatura subiendo... 🔥";
        termostato.classList.add("encendido");
    }
}

// Función auxiliar para el botón de activar/desactivar ECO
function quitarModoEco() {
    let termostato = document.getElementById("termostato");
    termostato.classList.toggle("eco");

    // Restauramos el texto original si volvemos a ECO
    if (termostato.classList.contains("eco")) {
        termostato.innerText = "Modo ECO Activado";
        termostato.classList.remove("encendido"); // Apagamos la calefacción
    } else {
        termostato.innerText = "Termostato Normal";
    }
}

