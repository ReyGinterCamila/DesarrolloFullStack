/* TRABAJO OBLIGATORIO N° 3
Encontrar el elemento más grande del arreglo
Dado el siguiente arreglo [4, 7, 9, 3, 1, 45, 67, 23, 29, 78, 11, 16]
Crear un programa que encuentre cuál es el número más grande del arreglo e imprimirlo por consola.
Almacenar el número más grande en una variable global y pasarlo a una función para determinar si el número es par o impar.
*/
const numeros: number[] = [4, 7, 9, 3, 1, 45, 67, 23, 29, 78, 11, 16];

// Función que encuentra el número más grande del arreglo
    function encontrarMaximo(arr: number[]): number {
        let maximo = arr[0]; 
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] > maximo) {
                maximo = arr[i]; 
            }
        }
        return maximo;
    }

    const numeroMasGrande: number = encontrarMaximo(numeros);

    console.log("El número más grande del arreglo es:", numeroMasGrande);

    // Función que determina si se trata de un número par o impar
    function esPar(numero: number): boolean {
        return numero % 2 === 0; 
    }

    if (esPar(numeroMasGrande)) {
        console.log("El número más grande es par.");
    } else {
        console.log("El número más grande es impar.");
    }

