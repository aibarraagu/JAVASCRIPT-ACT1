function saludar() {
    // alerta de saludar
    alert("¡Saludos!");
    // EL cuadro del nombre
    let nombre = prompt("pon tu nombre");
    // separamos del del nombre
    let apellido = prompt("pon tu apellido");
    // que muestre la alerta el mensaje de lo que has escrito
    // este tendrá espacios 
    alert(`Lo que has escrito: ${nombre} ${apellido}`);
    // este NO tendrá espacio entre las dos variables
    alert("Lo que has escrito: " + nombre + apellido);
}

function comparador() {
    alert("Comparador");
    let n1 = prompt("pon el primer numero")
    let n2 = prompt("pon el segundo numero")
    if (n1 > n2) {
        alert("el primer numero es mayor")
    } else {
        alert("el segundo numero es mayor")
    }
}

function calcedad() {
    // pa que nos avise de que se enciende
    console.log("se enciende");
    // La alerta de que se la calculadora se va a iniciar
    alert("Calculadora de edad");
    // 
    let añointroducido = prompt("Introduce tu año");
    let resta = 2026 - añointroducido;
    // alert(`Tienes ${resta} años` )
    añointroducido.innertext = "Tienes más o menos: " + resta
}

function repetir() {
    // alerta pa que sepamos keloke hacemos
    alert("Repetir")
    // la constante(que es la frase) se asigna con ese nombre y 
    const frase = "Estoy aprendiendo javascript"
    for (let i = 1; i <= 50; i++) {
        console.log(`${i}. ${frase}`)
    }
}

function semaforo() {
    alert("Escribe el color en pura minuscula ")
    const colorintroducido = prompt("Introduce el color");
    if (colorintroducido == "rojo"){
        alert("¡Alto!");
    } else if (colorintroducido == "amarillo"){
        alert("Precaución");
    } else if (colorintroducido == "verde") {
        alert("Adelante");
    } else {
        alert("ERROR")
    }

}
