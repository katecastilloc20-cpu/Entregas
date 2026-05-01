//Pide al usuario ingresar (nombre, edad) usando el prompt() y crea un objeto (usuario) con ellos.

let nombre = prompt('ingresa tu nombre')
let edad = prompt('ingresa tu edad')

let usuario = {
    nombre,
    edad
}

console.log(usuario)