/*
function celio(){
    console.log("Imprimiedo el incremento de x en "+x);
    setTimeout(suma, 9000);
    console.log("********************");
}
let x=0;
function suma() {
    console.log(x++);
}

let i=0;
let inner = function() {
    
    console.log('inner ',i++);
    }

let outer = function(callback) {
    console.log('outer 1');
    let timerId = setInterval(callback, 2000) /*ms;
    console.log('outer 2');

    setTimeout(function(){
        clearInterval(timerId);
    }, 10000);
} 

console.log('test 1');
outer(inner);
console.log('test 2');

/*
window.addEventListener("click", function() {
    console.log("¡hizo clic!");
});*/

window.addEventListener("load",function() {
    let b= document.getElementsByTagName("button");
    
        b[0].addEventListener("click", function () {
            alert("El boton que dio click");
        });

        b[1].addEventListener("click", function () {
            b[0].style="display:none";
        });

        b[2].addEventListener("click", function () {
            b[0].style="display:block";
        });
    
})