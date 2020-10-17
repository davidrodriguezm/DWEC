// U3T2 - Math    David Rodríguez Maestre

let r = prompt("Introduce el radio") * 1;
let dia = r * 2;
let peri = 2 * Math.PI * r;
let area_cir = Math.PI * Math.pow(r, 2);
let area_esf = 4 * Math.PI * Math.pow(r, 2);
let vol_esf = (4 / 3) * Math.PI * Math.pow(r, 3);

alert("El radio: " + r + "\nEl diámetro: " + dia + "\nEl perímetro de la circunferencia: " + peri.toFixed(2)
    + "\nEl área del círculo: " + area_cir.toFixed(2) + "\nEl área de la esfera: " + area_esf.toFixed(2) +
    "\nEl volumen de la esfera: " + vol_esf.toFixed(2));
