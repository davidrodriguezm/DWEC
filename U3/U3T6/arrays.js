// U3T6 - Arrays    David Rodriguez Maestre

var paises = ["Rusia", "Japon", "USA", "China", "Corea del sur", "Alemania", "Polonia", "India"];
let menu = prompt("Ociones:\n1 Mostrar número de países\n2 Mostrar listado de países\n3 Mostrar un intervalo de países" +
    "\n4 Añadir un país\n5 Borrar un país\n6 Consultar un país");

switch (menu) {
    case "1":
        mostrarNumero();
        break;
    case "2":
        mostrarPaises();
        break;
    case "3":
        intervalo();
        break;
    case "4":
        addPais();
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
    alert("Numero de paises: " + paises.length);
}

function mostrarPaises() {
    let orden = prompt("1 ver los paises\n2 verlos del revés\n3 verlos ordenados alfabéticamente");
    switch (orden) {
        case "1":
            alert("Paises:" + paises);
            break;
        case "2":
            alert("Paises al revés:" + paises.reverse());
            break;
        case "3":
            alert("Paises ordenados alfabéticamente:" + paises.sort());
            break;
        default:
            alert("Introduzca un numero del 1 al 3");
            break;
    }
}

function intervalo() {
    let inter = prompt("Introduzca el intervalo en formato inicio-fin");
    let separdo = inter.split("-");
    let p = separdo[0];
    let f = separdo[1];
    alert("Intervalo: " + paises.slice(p, f));
}

function addPais() {
    let orden = prompt("1 añadir al principio\n2 añadir al final");
    if (orden == 1 || orden == 2) {
        let pais = prompt("Introduzca un pais");
        if (orden == 1) {
            paises.unshift(pais);
        } else {
            paises.push(pais);
        }
        alert("Paises:" + paises);
    } else {
        alert("Introduzca 1 o 2");
    }
}

function borrar() {
    let borra = prompt("1 borrar el primero\n2 borrar el ultimo");
    if (borra == 1 || borra == 2) {
        if (borra == 1) {
            paises.shift();
        } else {
            paises.pop();
        }
        alert("Paises:" + paises);
    } else {
        alert("Introduzca 1 o 2");
    }
}

function Consultar() {
    let consu = prompt("1 Consultar por posición\n2 quiere consultar por nombre");
    switch (consu) {
        case "1":
            let posi = prompt("Introduce la posición del pais");
            if (typeof paises[posi] === "undefined") {
                alert('No se ha encontrado');
            } else {
                alert("El pais es: " + paises[posi]);
            }
            break;
        case "2":
            let nom = prompt("Introduce el nombre del pais");
            if (paises.indexOf(nom) >= 0) {
                alert("La posición es: " + paises.indexOf(nom));
            } else {
                alert('No se ha encontrado');
            }
            break;
        default:
            alert("Introduzca un numero del 1 al 2");
            break;
    }
}