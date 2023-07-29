"use strict";
//declaro
let nombre;
let edad;
//inicializo
//el igual (=) es para asignación
//NO es para comparar
nombre="Jhon";
edad=36;

let apellido="Moreno";
//const height = 180;
//console.log(height);








//Alcance
//let counter;
//console.log(counter); 
{//llave de apertura
    //counter = 1;
    //console.log(counter); 
}//llave de cierre
//counter = counter + 1;
//console.log(counter); 






/*
let height = 200;//global
{
    let weight = 100;//local 1
    {
        let info = "tall";//local 2
        console.log(height); // -> 200
        console.log(weight); // -> 100
        console.log(info); // -> tall
    }
    console.log(height); // -> 200
    console.log(weight); // -> 100
    console.log(info); // -> Uncaught ReferenceError: info is not defined
 }*/






 var height = 180;
 {
     var weight = 70;
     console.log(height); // -> 180
     console.log(weight); // -> 70   
 }
 console.log(height); // -> 180
 console.log(weight); // -> 70
     
 
 