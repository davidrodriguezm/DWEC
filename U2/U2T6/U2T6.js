//U2T6 - Ejemplo de práctica entregable  David Rodríguez Maestre

function Juego() {
  var aleatorio = Math.floor(Math.random() * (100 - 1) + 1);
  var intentos = 0;
  while (true) {
    var num = prompt("Introduce un numero del 1 al 100");
    intentos++;
    if (num) {
      if (num == aleatorio) {
        alert("Correcto \nhan sido " + intentos + " intentos");
        break;
      } else if (num > aleatorio) {
        alert("Es mayor");
      } else if (num < aleatorio) {
        alert("Es menor");
      } else if (isNaN(num)) {
        alert("No es un numero");
      }
    } else {
      alert("Juego cancelado");
      break;
    }
  }
}
