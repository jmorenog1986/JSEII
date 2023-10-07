let operacion;


function operaciones(b) {
    let input= document.getElementsByTagName("input");
    let x=Number(input[0].value);
    let y=Number(input[1].value);

    let op= b.innerText;
    switch (op) {
        case "suma":
            operacion=suma;
            break;
        case "resta":
            operacion=resta;
            break;
        case "multi":
            operacion=multi;
            break;
        case "divi":
            operacion=divi;
            break;
        case "fac":
            operacion=factorial;
            break;
    
        default:
            break;
    }

    ver(operacion(x, y));
}


function factorial(numero, y) {
    if(numero==1){
        return 1;
    }         
                
    return numero* factorial(numero-1);
}
                //0
function ver(numero){
    console.log(numero);
}

function suma(x,y){
    return x + y;
}
function resta(x,y){
    return x - y;
}
function multi(x,y){
    return x * y;
}
function divi(x,y){
    return x / y;
}



function operation(func, first, second) {
    return func(first, second);
}


console.log(operation(a, 10, 20));

let a=function(a, b) { return a * b;}