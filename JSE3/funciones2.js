"use strict";
let nombreCompleto;



function capturaDatos() {
    let nombre=prompt("digite su nombre");
    let apellido=prompt("digite su apellido");
    nombreCompleto=nombre+" "+apellido;
    
}

function verDatos(){
    console.log(nombreCompleto);
}


capturaDatos(); 
verDatos();




















