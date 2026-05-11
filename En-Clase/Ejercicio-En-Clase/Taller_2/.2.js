//Crea una función palabrasLargas(palabras, longitudMinima) que reciba un array de strings y un número, y devuelva un nuevo array solo con las palabras que tengan longitud mayor o igual a longitudMinima.

function palabrasLargas (palabras, longitudMinima){

  let resultado = [];

  for (let palabra of palabras){

    if (palabra.length >= longitudMinima){
        resultado.push(palabra);
    }
  }

  return resultado;

}

let lista = ['manzana', 'durazno', 'uva', 'kiwi'];

let resultado = palabrasLargas (lista,5);

console.log(resultado);