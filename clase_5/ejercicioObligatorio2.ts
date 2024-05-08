//Realice un programa que devuelva la potencia de un número. 
//La base y el exponente deben ser ingresados por teclados. 
//Sólo deben admitirse exponentes mayores o iguales a cero. 
//Recuerde que el resultado de un número elevado a 0 es 1.
//Separe la lógica de calcular la potencia utilizando métodos. 

import * as readlineSync from "readline-sync";

// Solicitar la base y el exponente al usuario
// let num : number = readlineSync.question
let base : number = readlineSync.question('Ingrese un número: ');
var exponente : number = readlineSync.question('Ingresa el exponente (debe ser mayor o igual a 0): ');

// Verificar que el exponente sea mayor o igual a 0
if (exponente < 0) {
    console.log('El exponente debe ser mayor o igual a 0.');
} else {
    // Calcular la potencia y mostrar el resultado
    let resultado = 1;
    for (let i = 0; i < exponente; i++) {
        resultado *= base;
    }
    console.log(`El resultado de ${base} elevado a ${exponente} es: ${resultado}`);
}

