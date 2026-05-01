//Verifica si un número ingresado por el usuario es positivo, negativo o cero.

let numero = Number(prompt('digita un numero'))

if (numero >= 1){
    console.log('numero positivo');}
else if (numero < 0){
    console.log('numero negativo')
}
else{
    console.log('el numero es 0')
}