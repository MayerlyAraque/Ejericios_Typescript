function esPar(numero) {
    return numero % 2 === 0;
}
function esImpar(numero) {
    return numero % 2 !== 0;
}
console.log("el numero 2 es par?", esPar(2)); // true
console.log("el numero 7 es par?", esPar(7)); // false
