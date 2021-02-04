let datos_comunidades = null;

function select_comunidades(comunidades) {
    let option = '';
    for (let comunidad of comunidades) {
        option += '<option value="' + comunidad.ccaa + '">' + comunidad.ccaa + '</option>';
    }
    document.getElementById("comunidades").innerHTML = option;
}

function insertar_comunidades(comunidades) {
    select_comunidades(comunidades);
    let tabla = '<tr><th>CCAA</th><th>D.entregadas</th><th>D.admin</th><th>D.completa</th><th>P.entregadas</th><th>P.completa</th><th>P.admin</th></tr>';
    for (let comunidad of comunidades) {
        let tr = '<tr><td>' + comunidad.ccaa + '</td>';
        tr += '<td>' + comunidad.dosisEntregadas + '</td>';
        tr += '<td>' + comunidad.dosisAdministradas + '</td>';
        tr += '<td>' + comunidad.dosisPautaCompletada + '</td>';
        tr += '<td>' + comunidad.porcentajeEntregadas + '</td>';
        tr += '<td>' + comunidad.porcentajePoblacionCompletas + '</td>';
        tr += '<td>' + comunidad.porcentajePoblacionAdministradas + '</td></tr>';
        tabla += tr;
    }
    document.getElementById("respuesta").innerHTML = tabla;
    datos_comunidades = comunidades;
}

function cargar_fetch() {
    fetch("latest.json")
        .then((response) => response.json())
        .then((datos) => insertar_comunidades(datos))
        .catch((error) => document.getElementById("comunidades").innerHTML = error);
}

function cargar_xmlhttp() {
    let request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            insertar_comunidades(JSON.parse(this.responseText));
        }
    };
    request.open("GET", "latest.json", true);
    request.send(null);
}

function crear_objeto() {
    let objeto = {
        ccaa: document.getElementById("").value,
        dosisEntregadas: document.getElementById("").value,
        dosisAdministradas: document.getElementById("").value,
        dosisPautaCompletada: document.getElementById("").value,
        porcentajeEntregadas: document.getElementById("").value,
        porcentajePoblacionAdministradas: document.getElementById("").value,
        porcentajePoblacionCompletas: document.getElementById("").value,
    }
    return objeto;
}

function actualizar_comunidad() {
    fetch('actualizar_comunidad.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: JSON.stringify(crear_objeto())
        })
        .then(response => response.json())
        .catch(function (error) {
            document.getElementById("resul").innerHTML = 'Error en petición POST: ' + error;
        });
}

document.getElementById("c_fetch").addEventListener('click', cargar_fetch);
document.getElementById("c_xml").addEventListener('click', cargar_xmlhttp);
document.getElementById("modi").addEventListener('click', actualizar_comunidad);