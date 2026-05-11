//Crea una función extraerDominio(email) que devuelva todo lo que está después del @.

function estraerDominio(email){
    
    let partes = email.split('@');

    return partes [1];

}

let resultado = estraerDominio('kate@gmail.com');

console.log(resultado);