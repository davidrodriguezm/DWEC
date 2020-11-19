let cad = prompt("Introduce una cadena de texto");
let texto = "";
let aleatorio;
let cara = "";
for ( let i = 1; i <= cad.length; i++) {
    aleatorio = Math.floor( Math.random() * (2) );
    console.log(texto)
    cara = cad.substring( i-1, i);
    if ( aleatorio > 0 && cara != " " && typeof cara != "undefined") {
        texto += cara.toLocaleLowerCase() + "-";
    } else if ( aleatorio == 0 && cara != " " && typeof cara != "undefined"){
        texto += cara.toLocaleUpperCase() + "-";
    }
}
document.getElementById("texto").innerHTML = texto;