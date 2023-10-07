
function factorial(n){
    if(n==1){
        return 1;
    }
    return n*factorial(n-1);
}

function fact(n) {
    return n>1 ? n*factorial(n-1) : 1;
}

let f= (n)=> {return (n==1)? 1: n*f(n-1); }



