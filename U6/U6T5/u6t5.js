function crear_objeto() {
    let titu = document.getElementById("titulo").value;
    let dirc = document.getElementById("director").value;
    let cad = document.getElementById("cadena").value;
    let year = document.getElementById("anyo").value;
    let termi = document.getElementById("terminada").checked;
    let objeto = {
        titulo: titu,
        director: dirc,
        cadena: cad,
        anyo: year,
        terminada: termi
    }
    return objeto;    
}

function subir_datos() {
    let request = new XMLHttpRequest();
    let objeto = crear_objeto();
    request.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let respuesta = JSON.parse(this.responseText);
            console.log(respuesta);
            if ( respuesta == "ok") {
                document.getElementById("respuesta").className = "verde";
            } else {
                document.getElementById("respuesta").className = "rojo";
            }
            document.getElementById("respuesta").innerHTML = respuesta;
        }
    };
    let parametros = JSON.stringify(objeto);
    request.open("POST", "http://localhost:8090/U6/U6T5/create_serie.php", true);
    request.setRequestHeader( "Content-type", "application/x-www-form-urlencoded" );
    request.send("objeto=" + parametros);
}

document.getElementById("enviar").addEventListener('click', subir_datos);