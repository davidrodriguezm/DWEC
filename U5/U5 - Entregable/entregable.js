function crear(){
    let tabla = document.createElement("table");
    let columnas = document.getElementById("columnas").value;
    let filas = document.getElementById("filas").value;
    let relleno = document.getElementById("relleno").value;
    let grosor = document.getElementById("grosor").value;
    let color = document.getElementById("color").value;

    let borde = 'border: ' + grosor + 'px solid ' + color + ';';
    tabla.setAttribute("style", borde);

    if ( document.getElementById("header").checked ) {
        let header = document.createElement("tr");
        for (let h = 0; h < columnas; h++) {
            let th = document.createElement("th");
            th.setAttribute("style", borde);
            th.setAttribute("id", "th" + h);
            header.appendChild( th );
        }
        tabla.appendChild( header );
    }

    for (let fi = 0; fi < filas; fi++) {
        let tr = document.createElement("tr");
        for (let col = 0; col < columnas; col++) {
            let td = document.createElement("td");
            td.setAttribute("style", borde);
            td.appendChild( document.createTextNode( relleno ) )
            tr.appendChild( td );
        }
        tabla.appendChild( tr );
    }
    
    let div = document.getElementById("tabla");
    while ( div.hasChildNodes() ) {  
        div.removeChild( div.firstChild );
    } 

    document.getElementById("tabla").appendChild( tabla );   
}

function inputs(){
    let columnas = document.getElementById("columnas").value;
    let div = document.getElementById("inputs");
    for (let col = 0; col < columnas; col++) {
        let input = document.createElement("input");
        input.setAttribute("type", "text");
        input.setAttribute( "id", "input" + col );
        div.appendChild( input );
    }
}

document.getElementById("generar").addEventListener("click", crear);
document.getElementById("header").addEventListener("click", inputs);