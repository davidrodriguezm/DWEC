function area_session() {
    let contenido = '';
    for (let i = 0; i < sessionStorage.length; i++) { 
        let clave = sessionStorage.key(i);
        let valor = sessionStorage.getItem(clave);
        contenido += clave + ' - ' + valor + '\n';
    }
    document.getElementById('area_session').innerHTML = contenido;
}

function area_local() {
    let contenido = '';
    for (let i = 0; i < localStorage.length; i++) { 
        let clave = localStorage.key(i);
        let valor = localStorage.getItem(clave);
        contenido += clave + ' - ' + valor + '\n';
    }
    document.getElementById('area_local').innerHTML = contenido;
}

function guardar() {
    let tipo_al = document.getElementById('almacena').value;
    let clave = document.getElementById('clave').value;
    let valor = document.getElementById('valor').value;
    if ( document.getElementById('valor').value != "" && document.getElementById('clave').value != "" ) {
        if ( tipo_al == "session" ) {
            sessionStorage.setItem(clave, valor); 
            area_session();      
        } else if ( tipo_al == "local" ) {
            localStorage.setItem(clave, valor);
            area_local();
        }
    } else {
        alert('Introduce una clave y un valor');
    }   
}

function refrescar() {
    area_session();
    area_local();
}

function eliminar() {
    let tipo_al = document.getElementById('almacena').value;
    let clave = document.getElementById('clave').value;
    if ( clave != "" > 0 ) {
        if ( tipo_al == "local" ) {
            if ( localStorage.length > 0 ) {
                localStorage.removeItem(clave);
            } else {
                alert('No hay datos almacenados');
            }      
        } else if( tipo_al == "session" ) {
            if ( sessionStorage.length > 0 ) {
                sessionStorage.removeItem(clave);
            } else {
                alert('No hay datos almacenados');
            }
        }
        refrescar();
    } else {
        alert('Introduce una clave');
    }   
}

function compatibilidad() {
    if ( window.sessionStorage !== "undefined" && window.localStorage !== "undefined" ) {
        alert('Tu navegador acepta almacenamiento local y por sesión');
    } else if( window.sessionStorage !== "undefined" ) {
        alert('Tu navegador acepta almacenamiento por sesión y no por local');
    } else if( window.localStorage !== "undefined" ) {
        alert('Tu navegador acepta almacenamiento local y no por sesión');
    } else {
        alert('Tu navegador no acepta almacenamiento local ni por sesión');
    }
}

document.getElementById('guardar').addEventListener('click', guardar, false);
document.getElementById('eliminar').addEventListener('click', eliminar, false);
document.getElementById('refrescar').addEventListener('click', refrescar, false);
document.getElementById('compatibilidad').addEventListener('click', compatibilidad, false);