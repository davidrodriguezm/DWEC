let cad = prompt("Introduce una cadena nombre:apellidos:telefono:email:codigopostal");
let separado = cad.split(":");
let apellidos = separado[1];
let email = separado[3];
let codigoPostal = separado[4];
let emailSepardo = email.split("@");
let servidor = emailSepardo[1];

alert("Código postal: " + codigoPostal + "\nApellidos: " + apellidos + "\nEmail: " + email + 
    "\nServidor: " + servidor);
