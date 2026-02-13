function analizarDOM() {
    // 1. getElementById: Selecciona UN elemento único
    let titulo = document.getElementById("titulo-nombre");

    // Lo modificamos
    titulo.innerText = "Mikel Jorge - Profesor y programador";

    console.log("Hemos cambiado el título usando su ID.");


    // 2. getElementsByClassName: Devuelve una LISTA de elementos
    let descripciones = document.getElementsByClassName("descripcion");

    // ¡OJO! Como es una lista, tenemos que decir CUÁL queremos.
    // En programación empezamos a contar desde 0.
    // [0] es el primero de la lista.
    let primeraDescripcion = descripciones[0];

    primeraDescripcion.innerText = "Desarrollador Full Stack";
    primeraDescripcion.style.color = "purple";

    // 3. getElementsByTagName: Busca por etiqueta (li, p, div...)
    let itemsDeLista = document.getElementsByTagName("li");

    // Vamos a cambiar el TERCER elemento (índice 2)
    // [0] es HTML, [1] es CSS, [2] es JavaScript
    itemsDeLista[2].innerText = "JavaScript Avanzado";

    // Vamos a cambiar el PRIMERO
    itemsDeLista[0].style.fontWeight = "bold";

    // 4. parentNode: ¿Quién es el padre del botón?
    let boton = document.getElementById("btn-analizar");
    let padreDelBoton = boton.parentNode; // Esto debería ser el div con id "contenedor-principal"

    // Cambiamos el borde del padre
    padreDelBoton.style.border = "2px solid blue";

    console.log("El padre del botón es un elemento tipo: " + padreDelBoton.nodeName);

    // 5. children: ¿Quiénes son los hijos de la lista?
    let lista = document.getElementById("lista-habilidades");
    let hijosDeLaLista = lista.children; // Esto es una lista de los <li>

    // Accedemos al segundo hijo (índice 1)
    hijosDeLaLista[1].innerText = "CSS 3 (Modificado desde el padre)";


    // 6. Leer propiedades
    let contenedor = document.getElementById("contenedor-principal");

    console.log("--- Reporte del Contenedor ---");
    console.log("Tipo de etiqueta (nodeName): " + contenedor.nodeName);
    console.log("Su ID es: " + contenedor.id);
    console.log("Su clase es: " + contenedor.className);

// ******************************************************

let reto = document.getElementById("lista-habilidades");
let hijosreto = document.getElementsByClassName("habilidad")

let reto = document.getElementsByTagName("ul")
let hijosreto = reto.children;
hijosreto[0].style.color = "solid blue";
}