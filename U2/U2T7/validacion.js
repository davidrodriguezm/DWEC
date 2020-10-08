//U2T7 - Ejercicio final David Rodriguez Maestre

function validar(dni,letra){
    var cadena = "TRWAGMYFPDXBNJZSQVHLCKE";
    if ( dni ) {
        if ( isNaN(dni) ) {
            alert("Teclear un DNI (sin letras, sólo números)");
        } else {
            var resto = dni % 23;
            if ( cadena[resto] === letra) {
                alert("DNI correcto");
            } else {
                alert("Letra incorrecta la letra es: " + cadena[resto]);
            }
        }
    } else {
        alert("Completar el campo DNI");
    }

}