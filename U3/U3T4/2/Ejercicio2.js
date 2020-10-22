// U3T4 - String    David Rodríguez Maestre

let numeros = "0123456789";
let mayus = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
let minus = "abcdefghijklmnñopqrstuvwxyz";
let valores = "¯_@#%&$";
let cad = prompt("Introduce una contraseña segura que contenga\nnumeros, mayusculas, minusculas y \notros caracteres como " + valores);


if (contiene(cad, numeros) && contiene(cad, mayus) && contiene(cad, minus) && contiene(cad, valores)
        && cad.length > 7 && cad.length < 17) {
        alert("Contraseña segura");
} else {
        alert("La contraseña no es segura");
}

function contiene(cad1, cad2) {
        let contiene = false;
        for (let i of cad2) {
                if (cad1.search(i) >= 0) {
                        contiene = true;
                        break;
                }
        }
        return contiene;
}