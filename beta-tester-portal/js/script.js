// Alternar el tema | Marca una variable llamada cuerpo que es el document.body para que lo aplique al body del html.
// Luego con el cuerpo classList.toggle("tema-oscuro"), lo que hace es, si está desactivada activarla y si esta activada desactivarla (mas o menos).
// Entonces, la lógica del if es: si la classlist del cuerpo CONTIENE la classe tema oscuro, (o sea si está activada), que añada en la memoria del navegador en la preferencia-tema el valor oscuro y que si no está activada o sea EN CASO CONTRARIO, ponga la otra única alternativa posible que es que sea tema claro y marque dicha preferencia en la memoria.
function alternarTema() {
    let cuerpo = document.body;
    cuerpo.classList.toggle("tema-oscuro");
    if (cuerpo.classList.contains("tema-oscuro")) {
        localStorage.setItem("preferencia-tema", "oscuro")
    } else {
        localStorage.setItem("preferencia-tema", "claro")
    }
}

// inicializarApp | Asigna una variable a la preferencia del usuario, la cual es el elemento que haya en la memoria en dicho "grupo" el cual es el de preferencia, como lo que contiene la variable es el valor de lo que le ha sido dicho previamente, o sea oscuro o claro le ponemos que si el valor que hay en la variable es oscuro, que añada la clase tema oscuro que hara que se active el tema oscuro.
function inicializarApp() {
    let preferenciaUsuario = localStorage.getItem("preferencia-tema")
    if (preferenciaUsuario === "oscuro") {
        document.body.classList.add("tema-oscuro");
    }
}

function analizarEstructura(elementoBoton) {
    
}