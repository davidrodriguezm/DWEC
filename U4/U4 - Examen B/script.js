window.onload = iniciar;

function iniciar() {
    document.getElementById("enviar").addEventListener("click", validar);
}



function validar( even ) {
    crear_cookie();
    if( cam_ano( document.getElementById("ano").value ) && cam_habilidades( document.getElementById("habilidades").value ) 
        && cam_tirada( document.getElementById("tirada").value ) && cam_rol( document.getElementById("rol").value ) ) {
        even.preventDefault();
        document.getElementById("ano").value = "";
        document.getElementById("habilidades").value = "";
        document.getElementById("tirada").value = "";
        document.getElementById("rol").value = "";
        
    } else {
        even.preventDefault();
    }

}

function cam_ano( cad ) {
    let resul = false;
    if( cad >= 700 && cad <= 8000 ) {
        resul = true;
        document.getElementById("ano").className = "correcto";
    } else {
        document.getElementById("ano").className = "error";
        document.getElementById("ano").focus();
        document.getElementById("errores").innerHTML = "Campo año incorrecto";
    }
    return resul;
}

// ^ principia, el caracter especifico en medio,$ final, | otra opcion
function cam_habilidades( cad ) {
    let resul = false;
    console.log(cad);
    if( /(^M$)|(^WS$)|(^BS$)|(^S$)|(^T$)|(^W$)|(^A$)|(^Ld$)|(^Sv$)/.test(cad) ) {
        resul = true;
        document.getElementById("habilidades").className = "correcto";
    } else {
        document.getElementById("habilidades").className = "error";
        document.getElementById("habilidades").focus();
        document.getElementById("errores").innerHTML = "Campo habilidades incorrecto";
    }
    return resul;
}

// ^ principia, el caracter especifico en medio, \d un digito cualquiera, $ final, | otra opcion
function cam_tirada( cad ) {
    let resul = false;
    if( /(^Fx2R\d\d$)|(^F>R\d\d$)|(^F=R\d\d$)|(^F<R\d\d$)/.test(cad) ) {
        resul = true;
        document.getElementById("tirada").className = "correcto";
    } else {
        document.getElementById("tirada").className = "error";
        document.getElementById("tirada").focus();
        document.getElementById("errores").innerHTML = "Campo tirada incorrecto";
    }
    return resul;
}

function cam_rol( cad ) {
    let resul = false;
    if( cad != "" ) {
        resul = true;
        document.getElementById("rol").className = "correcto";
    } else {
        document.getElementById("rol").className = "error";
        document.getElementById("rol").focus();
        document.getElementById("errores").innerHTML = "Campo rol incorrecto";
    }
    return resul;
}

function cam_password( cad ) {
    let resul = false;
    if( /(^Fx2R\d\d$)|(^F>R\d\d$)|(^F=R\d\d$)|(^F<R\d\d$)/.test(cad) ) {
        resul = true;
        document.getElementById("password").className = "correcto";
    } else {
        document.getElementById("password").className = "error";
        document.getElementById("password").focus();
        document.getElementById("errores").innerHTML = "Campo password incorrecto";
    }
    return resul;
}

function crear_cookie( nombre = "tirada" ) {
    let valor = Math.floor(Math.random() * 7);
    let fecha = new Date();
    fecha.setTime(fecha.getTime() + 1 * 24 * 60 * 60 * 1000);
    expiracion = "expires=" + fecha.toUTCString();
    document.cookie = nombre + "=" + valor + ";" + expiracion + ";path=/";
}