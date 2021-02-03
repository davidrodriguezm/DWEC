let json_datos = null;

function cargar_json(armas, bando = null) {
    let tabla = '<tr><th>nombre</th><th>imagen</th><th>descripcion</th><th>bando</th></tr>';
    for ( let arma of armas ) {
        let tr = '<tr><th>';
        tr += arma.nombre;
        tr += '</th><td>';
        tr += '<img src="' + arma.imagen + '" />';
        tr += '</td><td>';
        tr += arma.descripcion;
        tr += '</td><td>';
        if ( arma.bando == 1 ) {
            tr += 'Aliados';
        } else if ( arma.bando == 2 ) {
            tr += 'Eje';
        }   
        tr += '</td></tr>';
        if ( bando != null ) {
            if ( bando == arma.bando ) tabla += tr;
        } else {
            tabla += tr;
        }
    }
    document.getElementById("respuesta").innerHTML = tabla;
    json_datos = armas;
}

function cargar_fetch() {
    fetch("listar_armas.php")
    .then( (response) => response.json() )
    .then( (data) => cargar_json(data) )
    .catch( (error) => document.getElementById("respuesta").innerHTML = 'Error: ' + error );
}

function cargar_xmlhttp() {
    let request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            cargar_json( JSON.parse( this.responseText ) );
        }
    };
    request.open("GET", "listar_armas.php", true);
    request.send(null);
}

function filtrar_bando() {
    if ( json_datos != null ) cargar_json( json_datos, document.getElementById("bando").value );
}

document.getElementById("fetch").addEventListener('click', cargar_fetch);
document.getElementById("xmlhttp").addEventListener('click', cargar_xmlhttp);
document.getElementById("bando").addEventListener('click', filtrar_bando);