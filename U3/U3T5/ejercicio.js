//U3T5 - Window    David Rodríguez Maestre
//,toolbar=no,location=no,menubar=no,resizable=no
var ventana;

function abrir() {
    let abre = confirm("Quieres abrir una ventana");
    let texto = '<p>Texto ingenioso que aun no se me ha ocurrido pero no pierdo la esperanza de que algún día se me ocurra y alguna otra cosa mas para rellenar este texto.</p><br>';
    if (abre === true) {
        ventana = window.open("", "ventana", "width=200,height=80,top=500,left=500,toolbar=no,location=no,menubar=no,resizable=no","");
        ventana.document.write(texto + '<input type="button" onclick="window.close();" value ="Cerrar">');
    }
}

function cerrar() {
    if (!ventana) {
        alert("No se ha abierto todavía una ventana");
    } else {
        if (ventana.closed) {
            alert("Error, la ventana esta cerrada");
        } else {
            ventana.close();
        }
    }
}

function mover() {
    ventana.moveBy(10, 10);
}

function posicionar() {
    ventana.moveTo(100, 100);
}

function agrandar10() {
    ventana.resizeBy(10, 10);
}

function agrandarXL() {
    ventana.resizeBy(400, 200);
}

function scrollArriba() {
    ventana.scrollTo(0, 0);
}

function scrollCasiArriba() {
    ventana.scrollTo(0, 10);
}