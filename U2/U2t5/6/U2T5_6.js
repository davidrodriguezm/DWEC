//U2T5 - Ejercicios varios  David Rodríguez Maestre

var dia = prompt("Introduce un día de la semana para ver el siguiente por consola");
dia = parseInt(dia);
switch (dia) {
  case 1:
    console.log('Mañana sera martes');
    break;
  case 2:
    console.log('Mañana sera miercoles');
    break;
  case 3:
    console.log('Mañana sera jueves');
    break;
  case 4:
    console.log('Mañana sera viernes');
    break;
  case 5:
    console.log('Mañana sera sabado');
    break;
  case 6:
    console.log('Mañana sera domingo');
    break;
  case 7:
    console.log('Mañana sera lunes');
    break;
  default:
    console.log('No es un día de la semana');
}