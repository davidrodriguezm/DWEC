// U3T1 - Date    David Rodríguez Maestre
let actual = new Date();
let final = new Date(2021,5,24);
let diferencia = final.getTime() - actual.getTime();
let dias = Math.round( diferencia / (24 * 60 * 60 * 1000) );
alert("Faltan " + dias + " días para el fin de curso");