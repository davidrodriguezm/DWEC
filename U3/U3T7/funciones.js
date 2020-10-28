// U3T7 - Funciones    David Rodriguez Maestre

function Imc( ) {
    let masa = prompt("Inroduce la masa");
    let altura = prompt("Inroduce la altura");
    let resul = masa / Math.pow(altura,2);
    alert("El indice de masa corporal es: " + resul);
}

function Fcm( ) {
    let edad = prompt("Inroduce la edad");
    let resul = 220 - edad;
    alert("La frecuencia cardíaca máxima es: " + resul);
}