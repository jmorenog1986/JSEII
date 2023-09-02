/**
 * tomo dos valores y los sumo
 * @augments
 * x , y
 * @returns enteros
 */
function suma(x,y) {
    return x+y;
}

/**
 * Devuelve el tipo de dato de la variable
 * @argument
 * variable
 * @returns
 * String con el tipo de dato
 */
function tipoDato(variable) {
    return typeof variable;
}
let t=suma(2,5);
console.log(tipoDato(t));

function residuo(x, y){
    return x%y;
}

let n1 = 10;
let n2=10;

//n1=n2+20*n1
n1*=20+n2;
//n1=n1*20
//n1=n1**20
//n1=n1/20
//n1=n1%20
n1%=20;

console.log(n1)

