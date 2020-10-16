// U3T1 - Date    David Rodríguez Maestre
// domingo es el 0
let fecha = new Date(2021,7,23);
let cont = 0;
for ( i = 2020; i <= 2100; i++ ) {
    fecha.setFullYear(i);
    if ( fecha.getDay() == 0 ) cont++;
}
alert("Asta el 2100 mi cumpleaños es domingo en " + cont + " ocasiones");