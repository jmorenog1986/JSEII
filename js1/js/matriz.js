let personas=[];


let stop=6;
function guardarPersona(){
    if(personas.length<6){
        let nombre=document.getElementById("nombre").value;
        let id=document.getElementById("id").value;
        let fn=document.getElementById("fn").value;
        let correo=document.getElementById("correo").value;
        let ciudadR=document.getElementById("ciudadR").value;
    
        let artista=document.getElementById("artista").value;
        let c1=document.getElementById("c1").value;
        let c2=document.getElementById("c2").value;
        let c3=document.getElementById("c3").value;

        let art=[artista,[c1,c2,c3]]



        let p1=[nombre,id,fn,correo,ciudadR, art];
        personas.push(p1);
        console.log(personas);
    }else{
        alert("Ya no puede más");
    }
    
}


/*
canciones
cantantes
6 personas
nombre, id, fn, correo, ciudadr

artista, título de hasta 3 canciones
*/



    //nombre, id, fn, correo, ciudadR
    /*
p1=['Jhon moreno',123,'2023','@','Bogotá']
            //nombre, [t1,t2, t3]
let artista=['Black Sabbath', ['aaa','bbb','ccc']]

*/
//JSON    MongoDB
let ppersonas={
    nombre:"jhon",
    id:123,
    fn:"",
}