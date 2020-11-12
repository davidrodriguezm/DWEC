// U4T1 - Formularios 1    David Rodriguez Maestre

function Disco(nom, grupo, year, loc, tip, pres) {
    this.nombre = nom;
    this.grupo = grupo;
    this.year = year;
    if (!isNaN(loc)) {
        this.localizacion = loc * 1;
    } else {
        this.localizacion = 0;
    }
    if (tip === 'rock' || tip === 'pop' || tip === 'punk' || tip === 'indie') {
        this.tipo = tip;
    } else {
        this.tipo = '';
    }
    if (pres === true || pres === false) {
        this.prestado = pres;
    } else {
        this.prestado = false;
    } 
    this.mostrar = function () {
        let cad = 'Nombre: ' + this.nombre + '\nGrupo: ' + this.grupo + '\nAño: ' + this.year +
            '\nTipo: ' + this.tipo + '\nLocalizacion: ' + this.localizacion + '\nPrestado: ' + this.prestado;
        return cad;
    }
}

function mostrarDisco() {
    let nom = document.formu.nombre.value;
    let grupo = document.formu.grupo.value;
    let year = document.formu.year.value;
    let loc = document.formu.loc.value;
    let tip = document.formu.tipo.value;
    let pres = document.formu.pres.checked;
    let dis = new Disco(nom, grupo, year, loc, tip, pres);
    alert( dis.mostrar() );
}
