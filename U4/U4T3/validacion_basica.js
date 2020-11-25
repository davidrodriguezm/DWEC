window.onload = iniciar;

function iniciar() {
    document.getElementById("enviar").addEventListener('click', validar, false);
}

function campo20( cad ) {
    let resul = false;
    if( cad.length == 20 ) {
        resul = true;
    } else {
        alert("El campo tiene que ser de 20 caracteres")
    }
    return resul;
}

function com_loc( num ) {
    let resul = false;
    if( !isNaN(num) || num === "" ) {
        resul = true;
    } else {
        alert("La localizacion tiene que ser de numero o vacio")
    }
    return resul;
}

function com_year( num ) {
    let resul = false;
    if( !isNaN(num) && num.length == 4) {
        resul = true;
    } else {
        alert("El año tiene que ser de 4 caracteres numericos")
    }
    return resul;
}

function validar() {
    let resul = false;
    if( campo20( document.getElementById("nom").value ) && campo20( document.getElementById("grup").value ) 
        && com_loc( document.getElementById("loc").value ) && com_year( document.getElementById("ano").value) ) {
        resul = true;
    } 
    return resul;
}