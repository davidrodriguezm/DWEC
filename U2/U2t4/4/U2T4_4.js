//U2T4 - Ventanas (prompt)  David Rodríguez Maestre

var nombre = prompt("¿Como te llamas?");
var edad = prompt("¿Cuantos años tienes?")*1;

if (edad >= 18) {
    alert ("Hola " + nombre + " \n" + "Eres mayor de edad y has vivido " + (edad*365) + " dias");
} else if (edad >= 0) {
    alert ("Hola " + nombre + " \n" + "Eres menor de edad y has vivido " + (edad*365) + " dias");
} else {
    alert ("Edad incorrecta ");
}