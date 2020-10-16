// U3T1 - Date    David Rodríguez Maestre

/* Las funciones tienen la variable idioma para determinar el idioma del resultado devuelto
siendo true el valor por defecto si no se especifica y dando una salida en español, 
pudiéndose cambiar a ingles pasando un false a la variable idioma. */

let fecha = new Date();
let menu = prompt("Introduce:\n 1 para tener el formato corto de la fecha\n" +
    " 2 para el formato en español\n 3 para el formato en idioma.") * 1;
switch (menu) {
    case 1:
        alert(fecha.getDate() + "/" + (fecha.getMonth() + 1) + "/" + fecha.getFullYear());
        break;
    case 2:
        alert(dias(fecha.getDay()) + ", " + fecha.getDate() + " de " + meses(fecha.getMonth())
            + " de " + fecha.getFullYear());
        break;
    case 3:
        alert(dias(fecha.getDay(), false) + ", " + meses(fecha.getMonth(), false) + " " + fecha.getDate()
            + ", " + fecha.getFullYear());
        break;
    default:
        alert("No se ha introducido un numero del 1 al 3");
        break;

}

function dias(dia, idioma = true) {
    let resul = "";
    switch (dia) {
        case 0:
            resul = idioma ? "Domingo" : "Sunday";
            break;
        case 1:
            resul = idioma ? "Lunes" : "Monday";
            break;
        case 2:
            resul = idioma ? "Martes" : "Tuesday";
            break;
        case 3:
            resul = idioma ? "Miércoles" : "Wednesday";
            break;
        case 4:
            resul = idioma ? "Jueves" : "Thursday";
            break;
        case 5:
            resul = idioma ? "Viernes" : "Friday";
            break;
        case 6:
            resul = idioma ? "Sabado" : "Saturday";
            break;
    }
    return resul;
}

function meses(mes, idioma = true) {
    let resul = "";
    switch (mes) {
        case 0:
            resul = idioma ? "enero" : "January";
            break;
        case 1:
            resul = idioma ? "febrero" : "February";
            break;
        case 2:
            resul = idioma ? "marzo" : "March";
            break;
        case 3:
            resul = idioma ? "abril" : "April";
            break;
        case 4:
            resul = idioma ? "mayo" : "may";
            break;
        case 5:
            resul = idioma ? "junio" : "June";
            break;
        case 6:
            resul = idioma ? "julio" : "July";
            break;
        case 7:
            resul = idioma ? "agosto" : "August";
            break;
        case 8:
            resul = idioma ? "septiembre" : "September";
            break;
        case 9:
            resul = idioma ? "octubre" : "October";
            break;
        case 10:
            resul = idioma ? "noviembre" : "November";
            break;
        case 11:
            resul = idioma ? "diciembre" : "December";
            break;
    }
    return resul;
}

