document.getElementById("introduce").addEventListener("click", add_li);
document.getElementById("primer").addEventListener("click", del_pri);
document.getElementById("ultimo").addEventListener("click", add_ult);

let lista = document.getElementById("lista");

function add_li() {
    let texto = prompt("Introduce texto");
    let li = document.createElement("li");
    let p = document.createTextNode(texto);
    li.appendChild( p );
    lista.appendChild( li );
}

function del_pri() {
    let hijo = lista.firstChild;
    console.log(hijo);
    lista.removeChild(hijo); 
}

function add_ult() {
    let hijo = lista.lastChild;
    if (hijo != null) lista.removeChild(hijo)
}