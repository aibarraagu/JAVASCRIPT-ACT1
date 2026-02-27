function validarInscripcion(evento) {
    // 1. Frenar el envío automático del formulario
    evento.preventDefault();

    // 2. Capturar los valores que ha escrito el usuario
    // Usamos .value para sacar el texto que hay DENTRO del input
    let nick = document.getElementById("nickname").value;
    let nombreReal = document.getElementById("nombre").value;
    let edadJugador = document.getElementById("edad").value;
    let dni = document.getElementById("dni").value;

    // 3. Capturar la caja donde mostraremos los errores
    let cajaErrores = document.getElementById("caja-errores");
    
    // Vaciamos los errores anteriores y la ocultamos por si acaso
    cajaErrores.innerHTML = "";
    cajaErrores.classList.add("oculto");

    // Variable para controlar si todo está bien
    let hayErrores = false;
    let mensajeError = "";

    // REGLA 1: El Nickname no puede estar vacío y debe tener al menos 3 letras
    if (nick === "" || nick.length < 3) {
        mensajeError = mensajeError + "<p>❌ El Nickname es obligatorio y debe tener al menos 3 caracteres.</p>";
        hayErrores = true;
    }

    // REGLA 2: El nombre real no puede estar vacío
    if (nombreReal === "") {
        mensajeError = mensajeError + "<p>❌ Debes introducir tu nombre real.</p>";
        hayErrores = true;
    }

    // REGLA 3: La edad no puede estar vacía y debe ser 16 o mayor
    // Convertimos el texto de la edad a un número entero con parseInt
    let edadNumerica = parseInt(edadJugador);

    if (edadJugador === "" || isNaN(edadNumerica) || edadNumerica < 16) {
        mensajeError = mensajeError + "<p>❌ Debes tener al menos 16 años para participar.</p>";
        hayErrores = true;
    }

    // REGLA 4: El DNI debe de tener 8 diitos y 1 letra
    const regex = /[0-9]{8}[a-zA-Z]$/;

    if (!regex.test(dni)) {
        mensajeError = mensajeError + "<p>❌ Has puesto el <strong>DNI</strong> mal maricon </p>";
        hayErrores = true;
    } else {
        window.location.href = "exito.html";
    }

    // ¿Qué hacemos al final?
    if (hayErrores === true) {
        // Mostramos los errores en la pantalla
        cajaErrores.innerHTML = mensajeError;
        cajaErrores.classList.remove("oculto");
    } else {
        // SI TODO ESTÁ CORRECTO:
        
        // 1. Guardamos los datos en la "mochila" del navegador (localStorage)
        // Se guardan como un diccionario: clave -> valor
        localStorage.setItem("datoNick", nick);
        localStorage.setItem("datoNombre", nombreReal);
        localStorage.setItem("datoEdad", edadJugador);
        localStorage.setItem("datosDni", dni);

        // 2. Redirigimos al usuario a la pantalla de éxito
        window.location.href = "exito.html";
    }
} // <-- Aquí termina la función validarInscripcion

function cargarDatos() {
    // 1. Abrimos la "mochila" (localStorage) y sacamos los datos guardados
    let nickGuardado = localStorage.getItem("datoNick");
    let nombreGuardado = localStorage.getItem("datoNombre");
    let edadGuardada = localStorage.getItem("datoEdad");
    let dniGuardado = localStorage.getItem("datoDNI");

    // 2. Buscamos los <span> en el HTML y les inyectamos el texto
    // Usamos if por si alguien entra a exito.html directamente sin pasar por el formulario
    if (nickGuardado !== null) {
        document.getElementById("res-nickname").innerText = nickGuardado;
        document.getElementById("res-nombre").innerText = nombreGuardado;
        document.getElementById("res-edad").innerText = edadGuardada;
        document.getElementById("res-dni").innerText = dniGuardado;
    } else {
        document.getElementById("res-nickname").innerText = "Jugador Desconocido";
    }
}