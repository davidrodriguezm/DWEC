// U3T4 - String    David Rodríguez Maestre

let cad = prompt("Introduce tu nombre y apellidos");
let separado = cad.split(" ");
let nombre = separado[0];
let apellido1 = separado[1];
let apellido2 = separado[2];
let sin_espa = nombre+apellido1+apellido2;

alert("Longitud sin espacios: " + sin_espa.length);
alert("En minúsculas: \n" + cad.toLowerCase());
alert("En mayúscula : \n" + cad.toUpperCase());
alert("Nombre: " + nombre + "\nApellido1: " + apellido1 + "\nApellido 2: " + apellido2);
alert("Nombre de usuario, compuesto por la inicial del nombre, el primer apellido y la inicial del segundo apellido: \n" 
        + nombre.charAt(0) + apellido1 + apellido2.charAt(0));
alert("Nombre de usuario compuesto por las tres primeras letras del nombre y delos dos apellidos: \n" 
        + nombre.substring(0,2) + apellido1.substring(0,2) + apellido2.substring(0,2));
