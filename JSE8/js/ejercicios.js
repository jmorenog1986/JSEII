let formulario;
/**
 * capturo los inputs de un formulario
 * @description
 * Captura los input del documento y los almacena en la variable formulario
 * */
function captura() {
    formulario=document.getElementsByTagName("input");
}

/**
 * hace otra cosa
 */
function capturaA() {
    
}

/**
 * cambia de color la fuente de los inputs
 * 
 * */
function cambioColorFuente() {
   
    let c=formulario.length;
    for(let i=0;i<c;i++){
        formulario[i].style="color:red";//cambio color según el indice del arreglo
    }
    
    
}

