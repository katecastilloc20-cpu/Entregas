//Crea una función paresEnRango(inicio, fin) que devuelva un array con todos los números pares entre inicio y fin (ambos incluidos si corresponden).


function paresEnRango (inicio,fin){
    let lista = []
    for (let i = inicio; i <= fin; i++) {
        if(i % 2 == 0){
            lista.push(i)
        }  
    }

    console.log(lista)
}

paresEnRango (1,10)