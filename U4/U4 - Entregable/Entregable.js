window.onload = iniciar;

function iniciar() {
    document.getElementById("enviar").addEventListener('click', validar);
    //document.getElementById("reiniciar").addEventListener('click', reiniciar_cookie);
    //document.getElementById("borrar").addEventListener('click', borrar);
    document.getElementById("intentos").innerHTML = get_valor_cookie();
}

function validar( e ) {
    let resul = false;
    let intentos = get_valor_cookie() * 1;
    crear_modificar_cookie( intentos + 1 );
    document.getElementById("intentos").innerHTML = get_valor_cookie();
    if( cam_nombre( document.getElementById("nombre").value ) && cam_apelllidos( document.getElementById("apellidos").value ) 
        && cam_edad( document.getElementById("edad").value ) &&  cam_dni( document.getElementById("nif").value )
        && cam_email( document.getElementById("email").value ) && cam_provincia( document.getElementById("provincia").value ) 
        && cam_fecha( document.getElementById("fecha").value ) && cam_telefono( document.getElementById("telefono").value ) 
        && cam_hora( document.getElementById("hora").value ) ) {
        resul = true;
        if ( confirm("enviar formulario" ) ) {
            resul = true;
        } else {
            e.preventDefault();
        }
    } else {
        e.preventDefault();
    }
    return resul;
}

function cam_nombre( cad ) {
    let resul = false;
    if( cad != "" && cad != null ) {
        resul = true;  
    } else {
        document.getElementById("errores").innerHTML = "Tiene que rellenar el campo nombre";
    }
    return resul;
}

function cam_apelllidos( cad ) {
    let resul = false;
    if( cad != "" && cad != null ) {
        resul = true;  
    } else {
        document.getElementById("errores").innerHTML = "Tiene que rellenar el campo apelllidos";
    }
    return resul;
}

function cam_edad( num ) {
    let resul = false;
    if( !isNaN(num) && num != "" && num >= 0 && num <= 105 ) {
        resul = true;
    } else {
        document.getElementById("errores").innerHTML ="La edad deve ser valores numéricos y en el rango de 0 a 105";
    }
    return resul;
}

// ^ empieza, \d{8} 8 numeros, -, [A-Z a-z] una letra, $ termina
function cam_dni( cad ) {
    let resul = false;
    if( /^\d{8}-[A-Z a-z]$/.test(cad) ) { // ^ empieza, \d{8} 8 numeros, - este caracter, [A-Z a-z] una letra, $ termina
        resul = true;
    } else {
        document.getElementById("errores").innerHTML = "El dni 8 números un guión y una letra";
    }
    return resul;
}

// ^ empieza, .+ cualquier caracter 1 o mas veces, @ este carcter, . este caracter, .+ cualquier caracter 1 o mas veces, $ termina
function cam_email( cad ) {
    let resul = false;
    if( /^.+@.+[.].+$/.test(cad) ) { 
        resul = true;
    } else {
        document.getElementById("errores").innerHTML = "Campo email en formato incorrecto";
    }
    return resul;
}

function cam_provincia( cad ) {
    let resul = false;
    if( cad != "" && cad != null && cad != "0" ) { 
        resul = true;
    } else {
        document.getElementById("errores").innerHTML = "Tiene que seleccionar en campo provincia alguna provincia";
    }
    return resul;
}

// ^ empieza, \d{ numero } especifico el numero de digitos, $ termina, / o - digo el cararter especifico
function cam_fecha( cad ) {
    let resul = false;
    if( /^\d{2}\/\d{2}\/\d{4}$|^\d{2}-\d{2}-\d{4}$/.test(cad) ) { 
        resul = true;
    } else {
        document.getElementById("errores").innerHTML = "Campo fecha en formato incorrecto";
    }
    return resul;
}

// ^ empieza, \d{ numero } especifico el numero de digitos, $ termina
function cam_telefono( cad ) {
    let resul = false;
    if( /^\d{9}$/.test(cad) ) { 
        resul = true;
    } else {
        document.getElementById("errores").innerHTML = "Campo telefono debe ser de 9 digitos";
    }
    return resul;
}

// ^ empieza, \d{ numero } especifico el numero de digitos, : digo el cararter especifico, $ termina
function cam_hora( cad ) {
    let resul = false;
    if( /^\d{2}:\d{2}$/.test(cad) ) { 
        resul = true;
    } else {
        document.getElementById("errores").innerHTML = "Campo hora debe seguir el patrón de hh:mm";
    }
    return resul;
}

function crear_modificar_cookie( valor = 0, nombre = "intentos" ) {
    let fecha = new Date();
    fecha.setTime(fecha.getTime() + 1 * 24 * 60 * 60 * 1000);
    expiracion = "expires=" + fecha.toUTCString();
    document.cookie = nombre + "=" + valor + ";" + expiracion + ";path=/";
}

function get_valor_cookie( nombre = "intentos" ) {
    let nom = nombre + "=";
    let array = document.cookie.split(";");
    for ( const i of array ) {
      let c = i;
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(nom) == 0) {
        return c.substring(nom.length);
      }
    }
    return "0";
}
