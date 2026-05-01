//Compara dos números ingresados por el usuario (num1, num2) y muestra cuál es mayor o si son iguales.

let num1 = Number(prompt('digita un primer numero'))
let num2 = Number(prompt('digita un segundo numero'))

if(num1 > num2){
    console.log('el número mayor es ' + num1);}
    else if (num2>num1){
        console.log('el número mayor es ' + num2);
    } else{
        console.log('los numeros son iguales')
    }
