let saludo="Buenos días";//global

function saludoBienvenida(especialidad){
    let saludo="Buenas noches";//local
    let x="Bienvenidos al curso";//local
    console.log("Saluda a los de",especialidad);
    console.log("Hola amigos,",saludo);
    console.log(x);
}

saludoBienvenida("ADSO");

console.log(saludo);

//saludoBienvenida("ADSI");
//saludoBienvenida("PS");
//saludoBienvenida("Sistemas");
