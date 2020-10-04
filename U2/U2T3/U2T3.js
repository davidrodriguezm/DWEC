//U2T3 - Comparación  David Rodríguez Maestre

var operacion1 = 10 == 10;
var operacion2 = 10 === 10;
var operacion3 = 10 === 10.0;
var operacion4 = "Laura" == "laura";
var operacion5 = "Laura" > "laura";
var operacion6 = "Laura" < "laura";
var operacion7 = "123" == 123;
var operacion8 = "123" === 123;
var operacion9 = parseInt("123") === 123;

alert ("La operación 10 == 10 es " + operacion1); // es true
alert ("La operación 10 === 10 es " + operacion2); // es true
alert ("La operación 10 === 10.0 es " + operacion3); // es true
alert ('La operación "Laura" == "laura" ' + operacion4); // es false no son iguales
alert ('La operación "Laura" > "laura" ' + operacion5); // es false 
alert ('La operación "Laura" < "laura" ' + operacion6); // es true
alert ('La operación "123" == 123 ' + operacion7); // es true
alert ('La operación "123" === 123 ' + operacion8); // es false
alert ('La operación parseInt("123") === 123 ' + operacion9); // es true