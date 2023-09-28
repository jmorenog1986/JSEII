"use strict"
//almacenar los datos: nombre, apellido y email
let documento;
let nombre;
let apellido;
let email;
function capturaData(){
    //capturo
    documento= document.getElementById("documento").value;
    //muesto
    document.getElementById("span1").innerText=documento;

    nombre= document.getElementById("nombre").value;
    document.getElementById("span2").innerText=nombre;
   
    apellido= document.getElementById("apellido").value;
    document.getElementById("span3").innerText=apellido;

    email= document.getElementById("email").value;
    document.getElementById("span4").innerText=email;
}

function verData(){
    let muestra=`Documento: ${documento} <br>Nombre:${nombre} ${apellido}<br>email: ${email}`;
    document.getElementById("muestra").innerHTML=muestra;

}

