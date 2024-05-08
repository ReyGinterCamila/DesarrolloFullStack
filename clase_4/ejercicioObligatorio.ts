//Desarrollar un algoritmo que dado un número ingresado por el usuario determine si el número es par o impar y le informe al ususario.
// En el caso de ser 0 (cero) el algoritmo deberá informarlo.

import * as readlineSync from "readline-sync";

let num : number = readlineSync.question ("Ingrese un número: ");
if (num === 0) {
console.log("El número es cero");
} else if (num % 2 === 0) {
    console.log("El número es par");
} else {
    console.log("El número es impar");
}