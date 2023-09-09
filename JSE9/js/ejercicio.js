function validar() {
    let ck1=document.getElementById("ck1");
    let ck2=document.getElementById("ck2");
    let d1=document.getElementById("msg");
   /* if(ck1.checked || ck2.checked){
        
        d1.innerHTML=" Usted es mayor de edad y no se va a morir porque es menor de 70";
       
    }else{
        d1.innerHTML=" paila hermano";
    }*/

   (ck1.checked || ck2.checked) ?  
   d1.innerHTML=" Usted es mayor de edad y no se va a morir porque es menor de 70"
   :
   d1.innerHTML=" paila hermano";
}

console.log(true ? "Alice" : "Bob"); // -> Alice
