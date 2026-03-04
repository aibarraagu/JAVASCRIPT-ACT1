function alternarTema () {
    let cuerpo = document.body;
    cuerpo.classlist.toogle("tema-oscuro");
    if (cuerpo.classlist.contains("tema-oscuro")) {
        localStorage.setItem("preferencia-tema", "oscuro")
    } else {
        localStorage.setItem("preferencia-tema", "claro")
    }
}

function inicializarApp () {
    let preferenciaUsuario = localStorage.getItem.("preferencia-tema")
    if (preferenciaUsuario = "oscuro"){
        body.classList.add("tema-oscuro");
    }
}