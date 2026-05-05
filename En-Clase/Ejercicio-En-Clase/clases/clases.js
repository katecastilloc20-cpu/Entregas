//Crear un algoritmo que capture los datos personales de 5 individuos, estos deberan ser: nombre, edad, genero. Una ves esten capturados en una lista, vamos a contar cuantos son hombres y cuantos son mujeres. Este ejercicio debe realizarse usando clases.

const persona1 = {
    nombre: 'carlos',
    edad: 35,
    genero: 'masculino'
}

class DatosPersonales {
    nombre;
    edad;
    genero;

    constructor(nombre, edad, genero) {

        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
    }

}
let personas = []









for (let i = 0; i < 5; i++) {
 
    const nombre = prompt('dime tu nombre')
const edad = Number(prompt('dime tu edad'))
const genero = prompt('cual es tu genero')

const persona2 = new DatosPersonales(
    nombre, edad, genero)

    personas.push(persona2

    )
}
console.log(personas)