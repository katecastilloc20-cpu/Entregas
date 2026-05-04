// Juego de adivinanza:
// a. Genera un número aleatorio entre 1 y 10.
// Puedes hacerlo así:
// const aleatorio =
// Math.floor(Math.random() * 10) + 1;
// b. Pide al usuario que adivine el número.
// c. Usa condicionales para decirle si acertó
// o no.

const aleatorio = Math.floor(Math.random()*10) + 1;

let intento = Number(prompt ('Adivina un número entre 1 y 10'));

if (intento === aleatorio){
    console.log ('adivinaste')
} else {
    console.log( 'incorrecto, el número era '+ aleatorio );
}
