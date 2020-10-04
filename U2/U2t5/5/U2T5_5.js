//U2T5 - Ejercicios varios  David Rodríguez Maestre

var n = 0;
while ( !(n >= 2 && n <= 10) ) {
  n = prompt("Introduce un número entre 2 y 10")*1;
};
console.log("Tabla de multiplicar");
for( i=1; i <= 10; i++ ) {
  console.log(n + " * " + i + " = " + (n * i) );
}
console.log("Tabla de dividir");
var i = 1;
while ( i <= 10 ) {
  console.log(n + " / " + i + " = " + (n / i) );
  i++;
};
console.log("Tabla de sumar");
var i = 1;
do {
  console.log(n + " + " + i + " = " + (n + i) );
  i++;
}while ( i <= 10 );