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
    // buscamos el get element by id y le damos nombre al elemento del ul
    let ul = document.getElementById("lista-caracteristicas");
    // le ponemos un nombre a la lista o mejor dicho a los hijos de la lista
    let lista = ul.children;
    // le damos nombre al segundo hijo de la lista de elementos
    let segundohijo = lista[1];
    // hacemos que en ese elemento cuando pulsemos el boton asignado a dicha función aparezca dicho texto
    segundohijo.innerText = ("Batería mejorada de 24 horas");
    // le asignamos el estilo de letra que queremos que tenga el innertext
    segundohijo.style.fontWeight = "bold";
}

