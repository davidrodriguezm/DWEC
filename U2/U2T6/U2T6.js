//U2T6 - Ejemplo de práctica entregable  David Rodríguez Maestre

function Juego() {
  var aleatorio = Math.floor(Math.random() * (100 - 1) + 1);
  var intentos = 0;
  while (true) {
    var num = prompt("Introduce un numero del 1 al 100");
    intentos++;
    if ( !isNaN(num) && num !== "" && num !== null ) {
       if (num == aleatorio) {
        alert("Correcto \nhan sido " + intentos + " intentos");
        break;
      } else if (num > aleatorio) {
        alert("Es mayor");
      } else if (num < aleatorio) {
        alert("Es menor");
      } 
    }if ( isNaN(num) || num === "" ) {
      alert("No es un numero");
    } else if ( num === null ) {
      alert("Juego cancelado");
      break;
    }  
  }
}