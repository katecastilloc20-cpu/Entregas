//Crea una función esMultiploDe3(numero) que devuelva true o false.

function esMultiploDe3(numero){

    if (numero % 3 === 0 ){
        return true;
    }
    else {
        return false;
    }
}


let resultado = esMultiploDe3(7);

console.log(resultado);