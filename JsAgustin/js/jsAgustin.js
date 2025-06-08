
function saludo(){
    document.write("\
        <h1>Ejemplo de saludos</h1>\
            <ol>\
                <li>Hola</li>\
                <li>¿que?</li>\
                <li>Whats up</li>\
            </ol>");
}

function arrayAsociativos(){
    const alumno = new Array();
    alumno["nombre"] = "juan";
    alumno["apellidoPat"] = "Sanchez";
    alumno["apellidoMat"] = "Perez";
    alumno["semestre"] = 6;
    alumno[regular] = true;
    alumno.direccion.calle = "Av.Insurgentes";
    alumno.direccion.numExterior = 330;
    alumno.direccion.colonia = "David Gustavo Gutierrez";
    const divAsoc = document.getElementsByTagName("div");
    divAsoc[1].innerHTML = "Alumno nombre = " + alumno.nombre + "<br/> Apellido paterno = " + alumno.apellidoPat + "<br/>"

    //Notacion JSon Java Script Object Notation
    let nuevoAlumno = {
        nombre: "Erick",
        apellidoPat: "Solorio",
        apellidoMat: "Gutierrez",
        semestre: 6,
        regular: false,
        direccion: {
            calle: "Av. Insurgentes",
            numExterior: 330,
            colonia: "David Gustavo Gutierrez",
            cp: 77010
        }
    };
}