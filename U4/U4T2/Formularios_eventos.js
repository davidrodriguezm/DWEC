//U4T2 - Formularios y eventos David Rodriguez Maestre

let lisa = "img/01_lisa.png";
let bart = "img/02_bart.png";
let homer = "img/03_homer.png";
let marge = "img/04_marge.png";
let maggie = "img/05_maggie.png";
let flanders = "img/06_flanders.png";
let input_anterior = null;
let nombres = ["lisa", "bart", "homer", "marge", "maggie", "flanders"]

function rellenar() {
    let ids = "img";
    let repetidos = [];
    let aleatorio = null;
    for (const nom of nombres) {
        for (let cont = 0; cont < 2;) {
            aleatorio = Math.floor(Math.random() * (12) + 1);
            if (!repetidos.includes(aleatorio)) {
                ids += aleatorio;
                document.getElementById(ids).name = nom;
                repetidos[repetidos.length] = aleatorio;
                ids = "img";
                cont++;
            }
        }
    }
}

function comprobar(input_nuevo) {
    input_nuevo.src = imagen( input_nuevo.name );
    setTimeout(() => {
        input_nuevo.src = "";
    }, 1000);
    if (input_anterior != null && input_anterior.id != input_nuevo.id) {
        if (input_nuevo.name == input_anterior.name) {
            input_nuevo.style = "background-color:green;";
            input_anterior.style = "background-color:green;";
            document.getElementById( "tx" + input_nuevo.id.substring( input_nuevo.id.length -1 ) ).value = "1";
            document.getElementById( "tx" + input_anterior.id.substring( input_anterior.id.length -1 ) ).value = "1"; 
        }
    }
    input_anterior = input_nuevo;
}

function imagen(nombre) {
    let resul = "";
    switch (nombre) {
        case "lisa":
            resul = lisa;
            break;
        case "bart":
            resul = bart;
            break;
        case "homer":
            resul = homer;
            break;
        case "marge":
            resul = marge;
            break;
        case "maggie":
            resul = maggie;
            break;
        case "flanders":
            resul = flanders;
            break;
    }
    return resul;
}