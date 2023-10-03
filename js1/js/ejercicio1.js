
let nombres=[];

function guardar() {
    nombres.unshift(document.getElementById("nombre").value);
}
function actualizar() {
    let n1=document.getElementById("nombre").value;
    let n2=document.getElementById("nombre2").value;
    for(let i=0;i<nombres.length;i++){
        if(n1==nombres[i]){
            nombres[i]=n2;
            break;
        }
    }
}


 function borrar() {
    nombres.pop();
 }
 function borrar2() {
    nombres.shift();
 }
function ver() {
    let texto="";
    nombres.forEach((n)=> texto+="<br>"+n);     
    document.getElementById("muestra").innerHTML=texto;
    console.log(nombres)

}
