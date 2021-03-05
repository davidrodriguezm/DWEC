let datos_respuesta = [];
let datos_personajes = [];
let films_datos = false;
let personajes_datos = false;

function procesar_films(respuesta) {
    for (let dato of respuesta) {
        let objeto = {
            id: dato.id,
            description: dato.description, 
            director: dato.director,
            locations: dato.locations,
            original_title: dato.original_title,
            original_title_romanised: dato.original_title_romanised,
            people: dato.people,
            producer: dato.producer,
            release_date: dato.release_date,
            rt_score: dato.rt_score,
            running_time: dato.running_time,
            title: dato.title,
            url: dato.url
        }
        datos_respuesta.push(objeto);
    }
    console.log(datos_respuesta);
    guardar_datos();
}

function obtener_xml(){
    let request = new XMLHttpRequest();
        request.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                let respuesta = JSON.parse(this.responseText);
                procesar_films(respuesta);
            }
        };
    request.open("GET", "https://ghibliapi.herokuapp.com/films", true);
    request.send(null); 
}

function obtener_fetch(){
    fetch("https://ghibliapi.herokuapp.com/films")
        .then( response => response.json() )
        .then( data => procesar_films(data) )
        .catch( error => console.log(error)      
    );
}

function guardar_datos() {
    let request = new XMLHttpRequest();
    request.open("POST", "insert_films.php", true);
    request.setRequestHeader( "Content-type", "application/json" );
    request.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let respuesta = JSON.parse(this.responseText);
            datos_respuesta = respuesta;
            films_datos = true;
            tabla();        
        }
    };
    let parametros = JSON.stringify(datos_respuesta);
    request.send(parametros);
}

function tabla(respuesta) {
    let tabla = '<tr><th>description</th><th>director</th><th>producer</th><th>release_date</th><th>rt_score</th><th>title</th><th>personajes</th></tr>';
    for(let dato of datos_respuesta) {
        let tr = '<tr><td>' + dato.description + '</td>';
        tr += '<td>' + dato.director + '</td>';
        tr += '<td>' + dato.producer + '</td>';
        tr += '<td>' + dato.release_date + '</td>';
        tr += '<td>' + dato.rt_score + '</td>';
        tr += '<td>' + dato.title + '</td>';
        tr += '<td>' + '<button type="button" id="personajes" >Personajes</button>' + '</td></tr>';
        tabla += tr;
    }
    document.getElementById("tabla").innerHTML = tabla;
    document.getElementById("personajes").addEventListener('click', tabla_personajes);
}

function tabla_personajes() {
    if (personajes_datos) {
        let tabla = '<tr><th>age</th><th>eye_color</th><th>films</th><th>gender</th><th>hair_color</th><th>name</th></tr>';
    for(let dato of datos_respuesta) {
        let tr = '<tr><td>' + dato.age + '</td>';
        tr += '<td>' + dato.eye_color + '</td>';
        tr += '<td>' + dato.films + '</td>';
        tr += '<td>' + dato.gender + '</td>';
        tr += '<td>' + hair_color + '</td>';
        tr += '<td>' + dato.name+ '</td>';
        tr += '<td>' + dato.name + '</td></tr>';
        tabla += tr;
    }
    document.getElementById("tabla_personajes").innerHTML = tabla;
    }
}

function procesar_personajes(respuesta) {
    for (let dato of respuesta) {
        let objeto = {
            age: dato.age,
            eye_color: dato.eye_color, 
            films: dato.films,
            gender: dato.gender,
            hair_color: dato.hair_color,
            id: dato.id,
            name: dato.name,
        }
        datos_personajes.push(objeto);
    }
    console.log(datos_personajes);
    guardar_personajes();
}

function guardar_personajes() {
    let request = new XMLHttpRequest();
    request.open("POST", "insert_people.php", true);
    request.setRequestHeader( "Content-type", "application/json" );
    request.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let respuesta = JSON.parse(this.responseText);
            console.log(respuesta);
            datos_personajes = respuesta;
            personajes_datos = true;       
        }
    };
    let parametros = JSON.stringify(datos_personajes);
    request.send(parametros);
}

function obtener_personajes(){
    fetch("https://ghibliapi.herokuapp.com/people")
        .then( response => response.json() )
        .then( data => procesar_personajes(data) )
        .catch( error => console.log(error)      
    );
}

document.getElementById("obtener_xml").addEventListener('click', obtener_xml);
document.getElementById("obtener_fetch").addEventListener('click', obtener_fetch);
document.getElementById("obtener_personajes").addEventListener('click', obtener_personajes);