//Usa operadores lógicos (&&, ||): Pide al usuario su edad y verifica si está entre 18 y 65 años (para "puede trabajar").

let edad = Number(prompt('cual es su edad'));

if (edad >=18 && edad <= 65){
    console.log('puede trabajar');
    } else {
    console.log ('no puede trabajar');

}