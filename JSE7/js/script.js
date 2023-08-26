let personas = [];

function almacenar() {
    let input = document.getElementsByTagName("input");
    let p = {
        documento: input[0].value,
        nombre: input[1].value,
        apellido: input[2].value
    }
    personas.unshift(p);

}
function ver() {
    console.log("Personas almacenadas por ahora ", personas.length);
    console.log(personas);
}
function eliminarUltimo() {
    personas.pop();
    ver();
}
function eliminarPrimero() {
    personas.shift();
    ver();
}
function cambio() {
    personas.reverse();
    ver();
}

function buscarPorindice() {
    let i = document.getElementById("indice").value;
    console.log(personas[i]);
}

function buscarPorTexto() {
    let texto = document.getElementById("texto").value;
    console.log(personas.indexOf(texto));
}