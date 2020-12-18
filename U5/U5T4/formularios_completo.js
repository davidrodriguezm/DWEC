document.getElementById("texto").addEventListener("click", texto);
document.getElementById("password").addEventListener("click", password);
document.getElementById("textarea").addEventListener("click", textarea);
document.getElementById("label").addEventListener("click", label);
document.getElementById("imagen").addEventListener("click", imagen);
document.getElementById("checkbox").addEventListener("click", checkbox);
document.getElementById("radio").addEventListener("click", radio);
document.getElementById("submit").addEventListener("click", submit);

let form = document.getElementById("formu");

function texto(){
    let input_texto = document.createElement("input");
    input_texto.setAttribute("type", "text");
    input_texto.setAttribute("name", prompt("¿Qué nombre tiene el input?"));
    form.appendChild( input_texto );
    form.appendChild( document.createElement("br") );
}

function password(){
    let input_password = document.createElement("input");
    input_password.setAttribute("type", "password");
    input_password.setAttribute("name", prompt("¿Qué nombre tiene el input?"));
    form.appendChild( input_password );
    form.appendChild( document.createElement("br") );
}

function textarea(){
    let textarea = document.createElement("textarea");
    textarea.setAttribute("type", "textarea");
    textarea.setAttribute("rows", 5);
    textarea.setAttribute("cols", 40);
    textarea.setAttribute("name", prompt("¿Qué nombre tiene el input?"));
    form.appendChild( textarea );
    form.appendChild( document.createElement("br") );
}

function label(){
    let label_node = document.createElement("label");
    label_node.setAttribute("for", prompt("¿A qué input va referido el label?"));
    label_node.appendChild( document.createTextNode( prompt("¿Qué texto tiene?") ) );
    form.appendChild( label_node );
    form.appendChild( document.createElement("br") );
}


function imagen(){
    let img = document.createElement("img");
    img.setAttribute("type", "image");
    img.setAttribute("src", prompt("¿Qué ruta tiene la imagen?"));
    form.appendChild( img );
    form.appendChild( document.createElement("br") );
}

function checkbox(){
    let input_checkbox = document.createElement("input");
    input_checkbox.setAttribute("type", "checkbox");
    let nombre = prompt("¿Qué nombre tiene el input?");
    input_checkbox.setAttribute("name", nombre );
    input_checkbox.setAttribute("value", prompt("¿Qué valor tiene el input?"));
    let label_checkbox = document.createElement("label");
    label_checkbox.setAttribute("for", nombre);
    label_checkbox.appendChild( document.createTextNode( prompt("¿Qué texto tiene el label?") ) );
    form.appendChild( label_checkbox );
    form.appendChild( input_checkbox );
    form.appendChild( document.createElement("br") );
}

function radio(){
    let input_radio = document.createElement("input");
    input_radio.setAttribute("type", "radio");
    let nombre = prompt("¿Qué nombre tiene el input?");
    input_radio.setAttribute("name", nombre);
    input_radio.setAttribute("value", prompt("¿Qué valor tiene el input?"));
    let label_radio = document.createElement("label");
    label_radio.setAttribute("for", nombre);
    label_radio.appendChild( document.createTextNode( prompt("¿Qué texto tiene el label?") ) );
    form.appendChild( label_radio );
    form.appendChild( input_radio );
    form.appendChild( document.createElement("br") );
}

function submit(){
    let input_submit = document.createElement("input");
    input_submit.setAttribute("type", "submit");
    input_submit.setAttribute("name", prompt("¿Qué nombre tiene el input?"));
    input_submit.setAttribute("value", prompt("¿Qué valor tiene el input?"));
    form.appendChild( input_submit );
}