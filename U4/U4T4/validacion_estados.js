window.onload = iniciar;

function iniciar() {
    document.getElementById("enviar").addEventListener('click', validar, false);
}

function cam_grupo( cad ) {
    let resul = false;
    if( cad.length == 20 ) {
        resul = true;
        document.getElementById("grup").class = ""
        document.getElementById("para_grup").class = ""
    } else {
        alert("El campo nombre tiene que ser de 20 caracteres")
        document.getElementById("grup").class = "rojo"
        document.getElementById("para_grup").class = "rojo"
    }
    return resul;
}

function cam_nombre( cad ) {
    let resul = false;
    if( cad.length == 20 ) {
        resul = true;
        document.getElementById("nom").class = ""
        document.getElementById("para_nom").class = ""
    } else {
        alert("El campo nombre tiene que ser de 20 caracteres")
        document.getElementById("nom").class = "rojo"
        document.getElementById("para_nom").class = "rojo"
    }
    return resul;
}

function com_loc( num ) {
    let resul = false;
    if( !isNaN(num) || num === "" ) {
        resul = true;
        document.getElementById("loc").class = ""
        document.getElementById("para_loc").class = ""
    } else {
        alert("La localizacion tiene que ser de numero o vacio")
        document.getElementById("loc").class = "rojo"
        document.getElementById("para_loc").class = "rojo"
    }
    return resul;
}

function com_year( num ) {
    let resul = false;
    if( !isNaN(num) && num.length == 4) {
        resul = true;
        document.getElementById("ano").class = ""
        document.getElementById("para_ano").class = ""
    } else {
        alert("El año tiene que ser de 4 caracteres numericos")
        document.getElementById("ano").class = "rojo"
        document.getElementById("para_ano").class = "rojo"
    }
    return resul;
}

function validar() {
    let resul = false;
    if( cam_nombre( document.getElementById("nom").value ) && cam_grupo( document.getElementById("grup").value ) 
        && com_loc( document.getElementById("loc").value ) && com_year( document.getElementById("ano").value) ) {
        resul = true;
    } 
    return resul;
}