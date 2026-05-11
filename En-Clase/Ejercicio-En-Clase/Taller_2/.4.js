//Crea una función contarVocales(frase) que devuelva un objeto con la cantidad de a, e, i, o, u (sin distinguir mayúsculas).

function contarVocales (frase){

    let vocales = {
        a: 0,
        e: 0,
        i: 0,
        o: 0,
        u: 0
    };
    frase = frase.toLowerCase();

    for (let letra of frase){
        if (letra === 'a'){
            vocales.a++;
        }
        else if (letra === 'e'){
            vocales.e++;
        }
        else if (letra === 'i'){
            vocales.i++;
        }
        else if (letra === 'o'){
            vocales.o++;
        }
        else if (letra === 'u'){
            vocales.u++;
        }
    }
    return vocales;
}

let  resultado = contarVocales ('hola mundo');

console.log(resultado);