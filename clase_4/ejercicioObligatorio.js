const readlineSync = require('readline-sync');


var num = readlineSync.questionInt("Ingrese un número: ");
if (num === 0) {
    console.log("El número es cero");
    } else if (num % 2 === 0) {
        console.log("El número es par");
    } else {
        console.log("El número es impar");
    }