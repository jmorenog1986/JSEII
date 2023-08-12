
function formulario(){
    let isAdulto=document.getElementById("adulto");
    if(isAdulto.checked){
        mostrar(false);
    }else{
        mostrar(true);
    }
}
let d;
let n;
let a;
let e;
let p;
let s;

function mostrar(ver){
    d=document.getElementById("documento");
    d.hidden=ver;
    n=document.getElementById("nombre");
    n.hidden=ver;
    a=document.getElementById("apellido");
    a.hidden=ver;
    e=document.getElementById("email");
    e.hidden=ver;
    p=document.getElementById("pass");
    p.hidden=ver;
    s=document.getElementById("sueldo");
    s.hidden=ver;
    
}
function tamanio(){
    let docu=document.getElementById("documento").value;
    console.log(docu.length,docu);
    if(docu.length>8){
        console.log(typeof docu);
        let n=Number(docu);
        console.log(typeof n, n);
        
    }else{
        alert("todo mal");
    }
}

function numeroGrande(){
    let su=document.getElementById("sueldo").value;
    su=BigInt(su);
    console.log(typeof su, su);
}
function registro(){
    console.time();
    let texto=`Estimado señor ${n.value} ${a.value} es usted muy hermoso.
    Su correo registrado es ${e.value}. SU sueldo será menor a el que puso $ ${s.value} 
    `;
    console.log(texto);
    console.timeEnd();

}
