function mirarTipoDato() {
    
    //capturo todos los elementos cuando tienen el mismo nombre
    //de la etiqueta
    let input=document.getElementsByTagName("input");
    let div=document.getElementsByTagName("div");

    // capturo el valor de cada uno de los input y los almaceno 
    //independientemente
    let texto=input[0].value;
    let numero=input[1].value;
    let booleano=input[2].checked;
     //convertir tipos de datos
    numero=BigInt(numero);

   booleano=Boolean(booleano);
    texto=Boolean(texto);
    //miro el tipo de dato y lo muesto en los div correspondientes
    div[0].innerHTML=texto;
    div[1].innerHTML=typeof numero;
    div[2].innerHTML=numero;

}