// U3T8 - Objetos definidos por el usuario    David Rodriguez Maestre

function Disco() {
    this.nombre = '';
    this.grupo = '';
    this.year = '';
    this.tipo = '';
    this.localizacion = 0;
    this.prestado = false;
    this.propiedades = function (nom, grupo, year, loc, tip) {
        this.nombre = nom;
        this.grupo = grupo;
        this.year = year;
        if (!isNaN(loc)) {
            this.localizacion = loc * 1;
        }
        if (tip === 'rock' || tip === 'pop' || tip === 'punk'
            || tip === 'indie') {
            this.tipo = tip;
        }
    }
    this.estanteria = function (loc) {
        this.localizacion = loc;
    }
    this.estado = function (pres) {
        if (pres === true || pres === false) {
            this.prestado = pres;
        }
    }
    this.mostrar = function () {
        alert('Nombre: ' + this.nombre + '\nGrupo: ' + this.grupo + '\nAño: ' + this.year +
            '\nTipo: ' + this.tipo + '\nPrestado: ' + this.prestado);
    }
}

let dis1 = new Disco();
dis1.propiedades('Paranoid', 'black sabbath', 1970, 2, 'rock');
dis1.estado(true);
dis1.estanteria(1);

let dis2 = new Disco();
dis2.propiedades('Nevermind', 'Nirvana', 1991, 2, 'indie');

let dis3 = new Disco();
dis3.propiedades('Book of Shadows II', 'Zakk Wylde', 2016, 3, 'rock');

let dis4 = new Disco();
dis4.propiedades('Ordinary Man', 'Ozzy Osbourne', 2019, 4, 'rock');

let dis5 = new Disco();
dis5.propiedades('Thriller', 'Michael Jackson', 1982, 5, 'pop');

let dis6 = new Disco();
dis6.propiedades('Hardwired... to Self-Destruct', 'Metallica', 2016, 6, 'rock');
dis6.estado(true);

let dis7 = new Disco();
dis7.propiedades('Dead Letters', 'The Rasmus', 2003, 6, 'pop');

var discos = [dis1, dis2, dis3, dis4, dis5, dis6, dis7];

let menu = prompt("Ociones:\n1 Mostrar número de discos\n2 Mostrar listado de discos\n3 Mostrar un intervalo de discos" +
    "\n4 Añadir un disco\n5 Borrar un disco\n6 Consultar un disco");

switch (menu) {
    case "1":
        mostrarNumero();
        break;
    case "2":
        mostrarDiscos();
        break;
    case "3":
        intervalo();
        break;
    case "4":
        addDisco();
        break;
    case "5":
        borrar();
        break;
    case "6":
        Consultar();
        break;
    default:
        alert("Introduzca un numero del 1 al 6")
        break;
}

function mostrarNumero() {
    alert("Numero de discos: " + discos.length);
}

function mostrarDiscos() {
    let orden = prompt("1 ver los discos\n2 verlos del revés\n3 verlos ordenados alfabéticamente");
    if (orden == 1 || orden == 2 || orden == 3) {
        if (orden == 2) {
            discos.reverse();
        } else if (orden == 3) {
            discos.sort();
        }
        datosDiscos(discos);
    } else {
        alert("Introduzca un numero del 1 al 3");
    }
}

function intervalo() {
    let inter = prompt("Introduzca el intervalo en formato inicio-fin");
    let separdo = inter.split("-");
    let p = separdo[0];
    let f = separdo[1];
    datosDiscos(discos.slice(p, f));
}

function addDisco() {
    let orden = prompt("1 añadir al principio\n2 añadir al final");
    if (orden == 1 || orden == 2) {
        let dis8 = new Disco();
        dis7.propiedades('Vol. 3: (The Subliminal Verses)', 'Slipknot', 2004, 8, 'rock');
        if (orden == 1) {
            discos.unshift(dis8);
        } else {
            discos.push(dis8);
        }
        datosDiscos(discos);
    } else {
        alert("Introduzca 1 o 2");
    }
}

function borrar() {
    let borra = prompt("1 borrar el primero\n2 borrar el ultimo");
    if (borra == 1 || borra == 2) {
        if (borra == 1) {
            discos.shift();
        } else {
            discos.pop();
        }
        datosDiscos(discos);
    } else {
        alert("Introduzca 1 o 2");
    }
}

function Consultar() {
    let consu = prompt("1 Consultar por posición\n2 quiere consultar por nombre");
    switch (consu) {
        case "1":
            let posi = prompt("Introduce la posición del disco");
            if (typeof discos[posi] === "undefined") {
                alert('No se ha encontrado');
            } else {
                discos[posi].mostrar();
            }
            break;
        case "2":
            let nom = prompt("Introduce el nombre del disco");
            if (discos.indexOf(nom) >= 0) {
                alert("La posición es: " + discos.indexOf(nom));
            } else {
                alert('No se ha encontrado');
            }
            break;
        default:
            alert("Introduzca un numero del 1 al 2");
            break;
    }
}

function datosDiscos(dis) {
    for (let i = 0; i < dis.length; i++) {
        alert(dis[i].mostrar());
    }
}