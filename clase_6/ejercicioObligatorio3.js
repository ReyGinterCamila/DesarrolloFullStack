
var numeros = [4, 7, 9, 3, 1, 45, 67, 23, 29, 78, 11, 16];

function encontrarMaximo(arr) {
    var maximo = arr[0]; // Asignamos el primer elemento del arreglo como el máximo inicialmente
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > maximo) {
            maximo = arr[i]; // Actualizamos el máximo si encontramos un número mayor
        }
    }
    return maximo;
}

var numeroMasGrande = encontrarMaximo(numeros);

console.log("El número más grande del arreglo es:", numeroMasGrande);

function esPar(numero) {
    return numero % 2 === 0; // Un número es par si el resto de su división por 2 es 0
}

if (esPar(numeroMasGrande)) {
    console.log("El número más grande es par.");
}
else {
    console.log("El número más grande es impar.");
}
