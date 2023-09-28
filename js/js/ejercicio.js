"use strict"
/*
QUINTO ENUNCIADO: desarrollar un algoritmo que permita calcular los siguientes
datos de una fiesta:
Consideraciones:
*/

//¿Cuántas personas asistieron a la fiesta?
let contadorPersonas=0;
//¿Cuántos hombres y cuantas mujeres?
let hombres=0;
let mujeres=0;
//• Promedio de edades por sexo.
let sumaH=0;
let sumaM=0;
let proHombre=0;
let proMujer=0;
//• La edad de la persona más joven que asistió.
let edadJoven=898888;
//edad
let edad=0;



//• Ingresar datos hasta que se ingrese una edad igual a cero.
do{
    edad= Number(prompt("Digite la edad"));
    //• No se permiten menores de edad a la fiesta.
    if(edad<18){
        alert("Usted es un bebé. No puede entrar");
    }else{
        contadorPersonas++;

        let s=prompt("1) para hombre. 2) para mujer.");
        if(s=="1"){
            hombres++;
            sumaH+=edad;
            console.log(sumaH);
            console.log(hombres);
            console.log(sumaH/hombres)
            proHombre=sumaH/hombres;
        }else if(s=="2"){
            mujeres++;
            sumaM+=edad;
            proMujer=sumaM/mujeres;
        }

        if(edad<edadJoven){
            edadJoven=edad;
        }
    }

}while(edad!=0);

let respuesta=`¿Cuántas personas asistieron a la fiesta? ${contadorPersonas} <br>`;
    respuesta+=`¿Cuántos hombres y cuantas mujeres? Hombres ${hombres} Muejeres ${mujeres} <br> `;
    respuesta+=`Promedio de edades por sexo. H ${proHombre} M ${proMujer} <br> `;
    respuesta+=`La edad de la persona más joven que asistió. ${edadJoven} `;


document.write(respuesta);









