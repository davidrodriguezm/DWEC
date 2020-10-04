//U2T3b - Ejercicio adicional de comparación  David Rodríguez Maestre

var operacion1 = null == undefined;
var operacion2 = "NaN" == NaN;
var operacion3 = 5 == NaN;
var operacion4 = NaN == NaN;
var operacion5 = NaN != NaN;
var operacion6 = false == 0;
var operacion7 = true == 1;
var operacion8 = true == 2;
var operacion9 = undefined == 0;
var operacion10 = "5" == 5;

alert ("La operación null == undefined es " + operacion1); // es true
alert ('La operación "NaN" == NaN es ' + operacion2); // es false
alert ("La operación 5 == NaN es " + operacion3); // es false
alert ('La operación NaN == NaN es ' + operacion4); // es false
alert ('La operación NaN != NaN es ' + operacion5); // es true
alert ('La operación false == 0 es ' + operacion6); // es true
alert ('La operación true == 1 es ' + operacion7); // es true
alert ('La operación true == 2 es ' + operacion8); // es false
alert ('La operación undefined == 0 es ' + operacion9); // es false
alert ('La operación "5" == 5 es ' + operacion10); // es true