// U3T3 - Number    David Rodríguez Maestre

let num = prompt("Introduce un numero") * 1;

alert("Su valor exponencial: " + num.toExponential() + "\nEl número con 4 decimales: " + num.toFixed(4) +
    "\nEl número en binario: " + num.toString(2) + "\nEl número en octal: " + num.toString(8) +
    "\nEl número en hexadecima: " + num.toString(16));
