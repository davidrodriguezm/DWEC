let div = document.getElementById("contenedor");
let form = document.createElement("form");
form.setAttribute("id", "disco");

// label e input nombre
let label_nombre = document.createElement("label");
label_nombre.setAttribute("for", "nombre");
label_nombre.appendChild( document.createTextNode("Nombre del disco: "));
form.appendChild( label_nombre );

let input_nombre = document.createElement("input");
input_nombre.setAttribute("type", "text");
input_nombre.setAttribute("id", "nombre");
form.appendChild( input_nombre );
form.appendChild( document.createElement("br") );

// label e input grupo
let label_grupo = document.createElement("label");
label_grupo.setAttribute("for", "grupo");
label_grupo.appendChild( document.createTextNode("Grupo de música o cantante: ") );
form.appendChild( label_grupo );

let input_grupo = document.createElement("input");
input_grupo.setAttribute("type", "text");
input_grupo.setAttribute("id", "grupo");
form.appendChild( input_grupo );
form.appendChild( document.createElement("br") );

// label e input año
let label_ano = document.createElement("label");
label_ano.setAttribute("for", "ano");
label_ano.appendChild( document.createTextNode("Año de publicación: ") );
form.appendChild( label_ano );

let input_ano = document.createElement("input");
input_ano.setAttribute("type", "date");
input_ano.setAttribute("id", "ano");
form.appendChild( input_ano );
form.appendChild( document.createElement("br") );

// label y select tipo
let label_tipo = document.createElement("label");
label_tipo.setAttribute("for", "tipo");
label_tipo.appendChild( document.createTextNode("Tipo de música: ") );
form.appendChild( label_tipo );

let select_tipo = document.createElement("select");
select_tipo.setAttribute("id", "tipo");

let option_rock = document.createElement("option");
option_rock.setAttribute("value", "rock");
option_rock.appendChild( document.createTextNode("rock") );
select_tipo.appendChild( option_rock );

let option_pop = document.createElement("option");
option_pop.setAttribute("value", "pop");
option_pop.appendChild( document.createTextNode("pop") );
select_tipo.appendChild( option_pop );

let option_punk = document.createElement("option");
option_punk.setAttribute("value", "punk");
option_punk.appendChild( document.createTextNode("punk") );
select_tipo.appendChild( option_punk );

let option_indie = document.createElement("option");
option_indie.setAttribute("value", "indie");
option_indie.appendChild( document.createTextNode("indie") );
select_tipo.appendChild( option_indie );

form.appendChild( select_tipo );
form.appendChild( document.createElement("br") );

// label e input localización
let label_loc = document.createElement("label");
label_loc.setAttribute("for", "loc");
label_loc.appendChild( document.createTextNode("Localización: ") );
form.appendChild( label_loc );

let input_loc = document.createElement("input");
input_loc.setAttribute("type", "number");
input_loc.setAttribute("min", "1");
input_loc.setAttribute("max", "10");
input_loc.setAttribute("id", "loc");
form.appendChild( input_loc );
form.appendChild( document.createElement("br") );

// label e input Prestado
let label_pres = document.createElement("label");
label_pres.setAttribute("for", "pres");
label_pres.appendChild( document.createTextNode("Prestado: ") );
form.appendChild( label_pres );

let input_pres = document.createElement("input");
input_pres.setAttribute("type", "checkbox");
input_pres.setAttribute("id", "pres");
form.appendChild( input_pres );
form.appendChild( document.createElement("br") );

// input submit y reset
let input_submit = document.createElement("input");
input_submit.setAttribute("type", "submit");
input_submit.setAttribute("value", "enviar");
input_submit.setAttribute("id", "sub");
form.appendChild( input_submit );

let input_reset = document.createElement("input");
input_reset.setAttribute("type", "reset");
input_reset.setAttribute("value", "borrar");
input_reset.setAttribute("id", "res");
form.appendChild( input_reset );

div.appendChild( form );