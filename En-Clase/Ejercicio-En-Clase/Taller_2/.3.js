// Crea una función sumaImpares(numeros) que reciba un array de números y devuelva la suma solo de los números impares.

function sumaImpares (numeros){

    let suma = 0;

    for (let numero of numeros){
        if (numero % 2 !== 0){

            suma+= numero;
        }
    }
    return suma;
}

let lista = [1,2,3,4,5,6,7,8];

let resultado = sumaImpares(lista)

console.log(resultado)