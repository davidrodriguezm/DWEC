function Aeropuerto(nombre, ciudad, numeroVuelos) {
    this.nombre = nombre;
    this.ciudad = ciudad;
    this.numeroVuelos = numeroVuelos;
    this.vuelos = [];
    this.addVuelos = function (vue) {
        this.vuelos[this.vuelos.length] = vue;
    }
    this.setLlegada = function (num, hora) {
        this.vuelos[num].setHora_llegada(hora);
    }
    this.setSalida = function (num, hora) {
        this.vuelos[num].setHora_salida(hora);
    }
    this.comprobarHora = function (num) {
        this.vuelos[num].setHora_salida();
    }
}
function Vuelo(codigo, salida, llegada) {
    this.codigo = codigo;
    this.hora_llegada = llegada;
    this.hora_salida = salida;
    this.setHora_llegada = function (llegada) {
        this.hora_llegada = llegada;
    }
    this.setHora_salida = function (salida) {
        this.hora_salida = salida;
    }
    this.comprobar_hora = function () {
        return (this.hora_llegada > this.hora_salida) ? 'Es posterior' : 'No es posterior';
    }
}

let aero = new Aeropuerto('Varajas', 'Madrid', 10);
let vue1 = new Vuelo('codigo1', 11, 12);
aero.addVuelos(vue1);
let vue2 = new Vuelo('codigo2', 11, 12);
aero.addVuelos(vue2);
let vue3 = new Vuelo('codigo3', 11, 12);
aero.addVuelos(vue3);
let vue4 = new Vuelo('codigo4', 11, 12);
aero.addVuelos(vue4);
let vue5 = new Vuelo('codigo5', 11, 12);
aero.addVuelos(vue5);
let vue6 = new Vuelo('codigo6', 11, 12);
aero.addVuelos(vue6);
let vue7 = new Vuelo('codigo7', 11, 12);
aero.addVuelos(vue7);
let vue8 = new Vuelo('codigo8', 11, 12);
aero.addVuelos(vue8);
let vue9 = new Vuelo('codigo9', 11, 12);
aero.addVuelos(vue9);
let vue10 = new Vuelo('codigo10', 11, 12);
aero.addVuelos(vue10);

aero.setSalida(0,13);
console.log(aero.vuelos[0].comprobar_hora());
aero.setLlegada(0,14);
console.log(aero.vuelos[0].comprobar_hora());