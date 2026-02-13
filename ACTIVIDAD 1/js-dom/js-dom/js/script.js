function aplicarDescuento() {
    // Cogemos el 
    let precio = document.getElementById("precio-final");
    precio.innerText = "49.99";
}

function sinStock() {
    // seleccionamos la clase
    let stock = document.getElementsByClassName("estado");
    // le asignamos nombre al primer hijo de la clase stock 
    let primerostock = stock[0];
    // Le ponemos el innertext a la primera usando su nombre
    primerostock.innerText = "Agotado";
    // Y le cambiamos el color
    primerostock.style.color = ("red");
}

function destacarCaracteristica() {
    let ul = document.getElementById("lista-caracteristicas");
    let lista = ul.children;
    let segundohijo = lista[1];
    segundohijo.innerText = ("Batería mejorada de 24 horas");
    segundohijo.style.fontWeight = "bold";
}

