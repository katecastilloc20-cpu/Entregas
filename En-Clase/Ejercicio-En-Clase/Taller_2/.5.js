// Crea una función fusionarObjetos(objA, objB) que devuelva un nuevo objeto con todas las propiedades de ambos. Si hay claves repetidas, gana objB.

function fusionarObjetos (objA, objB){
    let nuevoObjeto = {
        ...objA,
        ...objB
    }
    return nuevoObjeto;
}

let objA = {
    nombre: 'Ana',
    edad: 20
};

let objB = {
    edad : 25,
    ciudad: 'Bogotá'
};

let resultado = fusionarObjetos (objA, objB);

console.log(resultado);