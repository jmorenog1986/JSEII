function verDiv(zzz){
    let s=document.getElementById("d"+zzz).style;
    if(s.display=="" || s.display=="none"){
        toggle(ver, s)
    }else{
        toggle(ocultar, s)
    }
}

function ver(s){
    s.display="block";
}
function ocultar(s){
    s.display="none";
}


function toggle(func,s) {
    func(s);
}



let m=verDiv;



function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

function operation(func, first, second) {
    return func(first, second);
}

console.log(operation(add, 10, 20)); // -> 30

console.log(operation(multiply, 10, 20)); // -> 200

