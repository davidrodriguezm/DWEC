function cargar_series() {
    let request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            cargar_xml(this);
        }
    };
    request.open("GET", "series.xml", true);
    request.send();
}

function cargar_xml(request) {
    let docXML = request.responseXML;
    let tabla = '<tr><th>Título</th><th>Director</th><th>Cadena</th><th>Año</th><th>Terminada</th></tr>';
    let series = docXML.getElementsByTagName("Serie");
    for ( serie of series ) {
        tabla += '<tr><th>';
        tabla += serie.getElementsByTagName("Titulo")[0].textContent;
        tabla += '</th><td class="cursiva">';
        tabla += serie.getElementsByTagName("Director")[0].textContent;
        tabla += '</td><td>';
        tabla += serie.getElementsByTagName("Cadena")[0].textContent;
        let ano = serie.getElementsByTagName("Ano")[0].textContent;
        tabla += color( ano );
        tabla += ano;    
        tabla += '</td><td>';
        let ter = serie.getElementsByTagName("Terminada")[0].textContent;
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
