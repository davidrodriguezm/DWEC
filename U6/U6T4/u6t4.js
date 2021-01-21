function cargar_series() {
    let request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            cargar_json(this);
        }
    };
    request.open("GET", "http://localhost:8090/U6/U6T4/datosjson.php", true);
    request.send();
}

function cargar_json(request) {
    let doc_json = JSON.parse( request.responseText );
    let series = doc_json.Series;
    let tabla = '<tr><th>Título</th><th>Director</th><th>Cadena</th><th>Año</th><th>Terminada</th></tr>';
    for ( let serie of series ) {
        tabla += '<tr><th>';
        tabla += serie.Titulo;
        tabla += '</th><td class="cursiva">';
        tabla += serie.Cadena;
        tabla += '</td><td>';
        tabla += serie.Director;
        let ano = serie.Ano;
        tabla += color( ano );
        tabla += ano;    
        tabla += '</td><td>';
        let ter = serie.Terminada;
        if ( ter == 'no') {
            tabla += '<img src="nicolas-cage-no.jpg" />'
        } else {
            tabla += '<img src="nicolas-cage-si.jpg" />'
        }
        tabla += '</td></tr>';
    }
    document.getElementById("demo").innerHTML = tabla;
}

function color( fecha ) {
    let cad = '</td><td>';
    if ( fecha < 2000 ) {
        cad = '</td><td class="rojo" >';
    } else if ( fecha >= 2001 && fecha <= 2010 ) {
        cad = '</td><td class="amarillo" >';
    } else if ( fecha >= 2011 ) {
        cad = '</td><td class="verde" >';
    }
    return cad;
}

cargar_series();