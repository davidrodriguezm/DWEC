function crear_objeto() {
    let objeto = {
        titulo: document.getElementById("titulo").value,
        director: document.getElementById("director").value,
        cadena: document.getElementById("cadena").value,
        anyo: document.getElementById("anyo").value,
        terminada: document.getElementById("terminada").checked
    }
    return objeto;
}

function cargar_json(series) {
    let tabla = '<tr><th>Título</th><th>Director</th><th>Cadena</th><th>Año</th><th>Terminada</th></tr>';
    for ( let serie of series ) {
        tabla += '<tr><th>';
        tabla += serie.titulo;
        tabla += '</th><td>';
        tabla += serie.cadena;
        tabla += '</td><td>';
        tabla += serie.director;
        tabla += '</td><td>';
        tabla += serie.anyo; 
        tabla += '</td><td>';
        tabla += serie.terminada;
        tabla += '</td></tr>';
    }
    document.getElementById("demo").innerHTML = tabla;
}

function mostrar_series() {
    fetch("http://localhost:8090/U6/U6T6/listar_series.php")
    .then(response => response.json())
    .then(data => cargar_json(data))
    .catch(function (error) {
            document.getElementById("respuesta").innerHTML = 'Error en petición GET: ' + error;
        });
}

function subir_datos() {
    fetch('create_serie.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: "objeto=" + JSON.stringify(crear_objeto())
        })
        .then(response => response.json())
        .then(function (data) {
            if (data == "ok") mostrar_series();
        })
        .catch(function (error) {
            document.getElementById("respuesta").innerHTML = 'Error en petición POST: ' + error;
        });
}

document.getElementById("enviar").addEventListener('click', subir_datos);