let precioRosa=8;
let cantidadRosas=70;

let precioLirio=10;
let cantidadLirios=50;

let precioTulipan=2;
let cantidadTulipanes=120;

let precioTotalRosas=precioRosa*cantidadRosas;
let precioTotalLirios=precioLirio*cantidadLirios;
let precioTotalTulipanes=precioTulipan*cantidadTulipanes;


let precioTotalFlores=precioTotalLirios+precioTotalRosas+precioTotalTulipanes;

/*
Rosa: precio unitario: 8 , cantidad: 70 , valor: 560
Lirio: precio unitario: 10 , cantidad: 50 , valor: 500
Tulipán: precio unitario: 2 , cantidad: 120 , valor: 240
Total:  1300
*/

console.log(`Rosa: precio unitario: ${precioRosa} , cantidad: ${cantidadRosas} , valor: ${precioTotalRosas}`)
console.log(`Lirio: precio unitario: ${precioLirio} , cantidad: ${cantidadLirios} , valor: ${precioTotalLirios}`);
console.log(`Tulipán: precio unitario: ${precioTulipan} , cantidad: ${cantidadTulipanes} , valor: ${precioTotalTulipanes}`);
console.log("Total:", precioTotalFlores);