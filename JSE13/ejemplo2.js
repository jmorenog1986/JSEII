let inner = function() {
    console.log('inner 1');
}
    
let outer = function(callback) {
    console.log('outer 1');
    setTimeout(callback, 1000) /*ms*/;
    console.log('outer 2');
}
    
console.log('test 1');
outer(inner);
console.log('test 2');

/*
test 1
outer 1
outer 2
test 2
inner 1 *********
*/