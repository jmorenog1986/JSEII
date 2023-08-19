let email=null;

function separar() {
    //capturar los datos
    email=document.getElementById("email").value;
    //separar
    let arroba=email.indexOf("@");//10
    let usuario=email.slice(0,arroba);//jhonmoreno

    let dominio=email.slice(arroba+1)//gmail.com

    document.getElementById("usuario").value=usuario;
    document.getElementById("dominio").value=dominio;
    
}


function separarSplit() {
    //capturar los datos
    email=document.getElementById("email1").value;
    let emailSeparado=email.split("@");
    document.getElementById("usuario1").value=emailSeparado[0];
    document.getElementById("dominio1").value=emailSeparado[1];
}