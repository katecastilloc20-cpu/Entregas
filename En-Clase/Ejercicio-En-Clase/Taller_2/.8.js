//Crea una función factorial(n) que reciba un número entero n (mayor o igual a 0) y devuelva su factorial.

function factorial(n){

    let resultado =1;

    for (let i = 1; i <= n; i++) {
       
        resultado *= i;
    }

    return resultado;
}

let resultado = factorial (5);

console.log (resultado);