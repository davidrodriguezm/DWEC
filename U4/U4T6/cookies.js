window.onload = iniciar;

function iniciar() {
    document.getElementById("enviar").addEventListener('click', validar);
    document.getElementById("reiniciar").addEventListener('click', reiniciar_cookie);
    document.getElementById("borrar").addEventListener('click', borrar);
    document.getElementById("n_errores").innerHTML = get_valor_cookie();
}

function cam_fecha( cad ) {
    let resul = false;
    if( /^\d{2}\/\d{2}\/\d{4}$/.test(cad) ) {
        resul = true;
    } else {
        alert("Fecha: obligatorio y con formato dd/mm/aaaa");
    }    
    return resul;
}

function cam_cocinero( cad ) {
    let resul = false;
    if( /^[A-Z]{2}\W\d{4}$/.test(cad) ) {
        resul = true;
    } else {
        alert("Cocinero: nombre en clave formado por dos letras en mayúscula, un  símbolo y cuatro dígitos (ej. WW$1234)");
    }
    return resul;
}

function com_destinatario( cad ) {
    let resul = false;
    if( /^[A-Z]{2,3}_[a-z]+\s*[a-z]*:\d{4}$/.test(cad) ) {
        resul = true;
    } else {
        alert("Destinatario: estará formado por dos o tres letras mayúsculas correspondientes al estado, un guión bajo,\n el nombre de la ciudad en minúsculas, dos puntos, y el  código de distrito de 4 digitos (ej. NM_alburquerque:1234).");
    }
    return resul;
}

function com_gramos( cad ) {
    let resul = false;
    if( /^([0-4]?[0-9]{3}|5000)$/.test(cad)) {
        resul = true;
    } else {
        alert("Gramos: será un número del 100 al 5000.");
    }
    return resul;
}

function cam_composicion( cad ) {
    let resul = false;
    if( /^[0-9]+[a-z A-Z]{1,2}[0-9]?[a-z A-Z]{1,2}[0-9]?$/.test(cad) ) {
        resul = true;
    } else {
        alert("Composición: estará formado por una cantidad en gramos seguida de dos  conjuntos de una o dos letras seguidas o no de un número. (ej. 200gC3OH7).");
    }
    return resul;
}

function com_numero( cad ) {
    let resul = false;
    let abc = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    if( /^[A-Z a-z]{2}\d{2}-\d{12}-\d{2}$/.test(cad) ) {
        let dividido = cad.split("-");
        let primeras_letras_numeros = dividido[0];
        let intermedio_numeros = dividido[1];
        let ultimos_numeros = dividido[2];

        let suma_primeros_d = abc.indexOf( cad.charAt(0).toLocaleUpperCase() ) + 1;
        suma_primeros_d +=  abc.indexOf( cad.charAt(1).toLocaleUpperCase() ) + 1; 
        let primeros_d = cad.charAt(2) * 10;
        primeros_d +=  parseInt( cad.charAt(3) );

        let primero_ultimos_d = 0;
        for (let i = 0; i < 6; i++) {
            primero_ultimos_d += intermedio_numeros[i] * 1;
        }
        primero_ultimos_d = Math.trunc( primero_ultimos_d / 6 );

        let ultimo_ultimos_d = 0;
        for (let i = 6; i < 12; i++) {
            ultimo_ultimos_d += intermedio_numeros[i] * 1;
        }
        ultimo_ultimos_d = Math.trunc( ultimo_ultimos_d / 6 );
        
        if ( suma_primeros_d == primeros_d && primero_ultimos_d == ultimos_numeros[0] && ultimo_ultimos_d == ultimos_numeros[1] ) {
            document.getElementById("texto").innerHTML = primeras_letras_numeros + intermedio_numeros + ultimos_numeros;
            resul = true;
        } else {
            alert("Los valores de los numeros no son correctos");
        }
    } else {
        alert("Dos letras: suponemos que el valor de cada letra es del 1 al 26 (no hay ñ ni ll)\nDos dígitos: debe corresponderse con la suma de la primera letra y la segunda:  en caso de que sea menor que 10 se pone el 0 delante."
         + "\nUn guión.\nDoce dígitos de cuenta.\nUn guión.\nDos dígitos de control: el primero deben ser la suma de los 6 primeros  dígitos de la cuenta dividido entre 6 y extrayendo solamente su parte entera; y el último exactamente igual, pero con los 6 siguientes."
         + "\nSi el número está correcto se colocará en un campo de texto al lado del anterior, pero sin guiones: solamente los números y las letras.");
    }
    return resul;
}

function validar( e ) {
    let resul = false;
    if( cam_fecha( document.getElementById("fecha").value ) && cam_cocinero( document.getElementById("cocinero").value ) 
        && com_destinatario( document.getElementById("destinatario").value ) && com_gramos( document.getElementById("gramos").value) 
        && cam_composicion( document.getElementById("composicion").value) && com_numero( document.getElementById("numero").value) ) {
        resul = true;
        alert("Datos correctos");
    } else {
        let errores = get_valor_cookie() * 1;
        crear_modificar_cookie( errores + 1 );
        document.getElementById("n_errores").innerHTML = get_valor_cookie();
        e.preventDefault();
    }
    return resul;
}

function crear_modificar_cookie( valor = 0, nombre = "contador" ) {
    let fecha = new Date();
    fecha.setTime(fecha.getTime() + 1 * 24 * 60 * 60 * 1000);
    expiracion = "expires=" + fecha.toUTCString();
    document.cookie = nombre + "=" + valor + ";" + expiracion + ";path=/";
}

function reiniciar_cookie() {
    crear_modificar_cookie();
    document.getElementById("n_errores").innerHTML = get_valor_cookie();
}

function get_valor_cookie( nombre = "contador" ) {
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

function borrar() {
    borrar_cookie();
    document.getElementById("n_errores").innerHTML = get_valor_cookie();
}

function borrar_cookie( nombre = "contador" ) {
    let fecha = new Date();
    fecha.setTime(0);
    expiracion = "expires=" + fecha.toUTCString();
    document.cookie = nombre + "=" + ";" + expiracion + ";path=/";
}