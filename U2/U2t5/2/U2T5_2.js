//U2T5 - Ejercicios varios  David Rodríguez Maestre

// El resultado es: John Doe 25
// for in recorre un mapa dado le a una variable las claves del los valores del mapa

var person = {fname:"John", lname:"Doe", age:25};

var text = "";
var x;
for (x in person) {
  text += person[x] + " ";
} 
alert(text);