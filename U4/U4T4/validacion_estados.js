window.onload = iniciar;

function iniciar() {
    document.getElementById("enviar").addEventListener('click', validar, false);
}

function cam_grupo( cad ) {
    let resul = false;
    if( cad.length == 20 ) {
        resul = true;
        document.getElementById("grup").className = "";
        document.getElementById("para_grup").className = "";
    } else {
        alert("El campo nombre tiene que ser de 20 caracteres");
        document.getElementById("grup").className = "rojo";
        document.getElementById("para_grup").className = "rojo";
    }
    return resul;
}

function cam_nombre( cad ) {
    let resul = false;
    if( cad.length == 20 ) {
        resul = true;
        document.getElementById("nom").className = "";
        document.getElementById("para_nom").className = "";
    } else {
        alert("El campo nombre tiene que ser de 20 caracteres");
        document.getElementById("nom").className = "rojo";
        document.getElementById("para_nom").className = "rojo";
    }
    return resul;
}

function com_loc( num ) {
    let resul = false;
    if( !isNaN(num) || num === "" ) {
        resul = true;
        document.getElementById("loc").className = "";
        document.getElementById("para_loc").className = "";
    } else {
        alert("La localizacion tiene que ser de numero o vacio");
        document.getElementById("loc").className = "rojo";
        document.getElementById("para_loc").className = "rojo";
    }
    return resul;
}

function com_year( num ) {
    let resul = false;
    if( !isNaN(num) && num.length == 4) {
        resul = true;
        document.getElementById("ano").className = "";
        document.getElementById("para_ano").className = "";
    } else {
        alert("El año tiene que ser de 4 caracteres numericos");
        document.getElementById("ano").className = "rojo";
        document.getElementById("para_ano").className = "rojo";
    }
    return resul;
}

function validar( e ) {
    let resul = false;
    if( cam_nombre( document.getElementById("nom").value ) && cam_grupo( document.getElementById("grup").value ) 
        && com_loc( document.getElementById("loc").value ) && com_year( document.getElementById("ano").value) ) {
        resul = true;
    } else {
        e.preventDefault();
    }
    return resul;
}