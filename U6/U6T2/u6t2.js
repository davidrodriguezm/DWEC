document.getElementById("enviar").addEventListener("click", lanzar_peticion);

function lanzar_peticion() {
    request = new XMLHttpRequest();
    let url = "http://localhost:8090/U6/U6T2/localidad.php";
    let parametro = "localidad=" + document.getElementById("localidad").value;
    if (request) {
        // Si existe el objeto request abrimos la url (asíncrona)
        request.open("GET", url + "?" + parametro, true);
        // En cada cambio de estado llama a estadoPetición
        request.onreadystatechange = respuesta_peticion;
        // Hacemos la petición al servidor con GET y parámetro null
        request.send(null);
    }
}

function respuesta_peticion() {
    if ( request.readyState == 4 && request.status == 200 ) {
        let respuesta = request.responseText;
        let div = document.getElementById("resultado");
        if ( respuesta == 'SI' ) {
            div.className = 'verde';
        } else {
            div.className = 'rojo';
        }
        let hijo = div.firstChild;
        if ( hijo != null ) div.removeChild( hijo );
        div.appendChild( document.createTextNode( respuesta ) );
    }
}