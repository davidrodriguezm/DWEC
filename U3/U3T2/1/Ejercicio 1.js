// U3T2 - Math    David Rodríguez Maestre

let menu = prompt("Introduce:\n1 para Potencia\n2 para Raíz\n3 para Redondeo\n4 para Trigonometría") * 1;
switch (menu) {
    case 1:
        let base = prompt("Introduce la base") * 1;
        let exp = prompt("Introduce el exponente") * 1;
        alert("La potencia de " + base + " elevado a " + exp + " es: " + Math.pow(base,exp));
        break;
    case 2:
        let num = prompt("Introduce un numero no negativo") * 1;
        if (num >= 0) {
            alert("La raíz de " + num + " es: " + Math.sqrt(num));
        } else {
            alert("Introduce un numero que no sea negativo");
        }
        break;
    case 3:
        let dec = prompt("Introduce un numero con decimales para redondear") * 1;
        alert("El numero entero al mas próximo: " + Math.round(dec) + "\nAl alta: " +
            Math.ceil(dec) + "\nA la baja: " + Math.floor(dec));
        break;
    case 4:
        let ang = prompt("Introduce un ángulo (entre 0 y 360)") * 1;
        if (ang >= 0 && ang <= 360) {
            alert("El seno: " + Math.sin(ang) + "\nEl coseno: " +
                Math.cos(ang) + "\nLa tangente: " + Math.tan(ang));
        } else {
            alert("Introduce un numero entre 0 y 360");
        }
        break;
    default:
        alert("Introduce un numero entre 1 y el 4");
        break;
}