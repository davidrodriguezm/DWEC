// U3T1 - Date    David Rodríguez Maestre

let fecha = new Date();
let menu = prompt("Introduce:\n 1 para hora detallada con minutos y segundos\n" +
    " 2 para hora con minutos y AM o PM según sea antes o después del medio dia ") * 1;
switch (menu) {
    case 1:
        alert(fecha.getHours() + ":" + fecha.getMinutes() + ":" + fecha.getSeconds());
        break;
    case 2:
        if ( fecha.getHours() >= 12 ) {
            alert( (fecha.getHours() - 12) + ":" + fecha.getMinutes() + ":" + fecha.getSeconds() + " PM");
        } else {
            alert(fecha.getHours() + ":" + fecha.getMinutes() + ":" + fecha.getSeconds() + " AM");
        }
        break;
    default:
        alert("No se ha introducido un numero del 1 al 2");
        break;
}