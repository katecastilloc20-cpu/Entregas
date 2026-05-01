//Crea una constante (PI) con el valor de 3.1416 y calcula el área de un círculo (área = π × radio²). Pide el radio con prompt y muestra el resultado con alert.


const PI = 3.1416;

let radio = Number(prompt('ingresa el radio del circulo'));

let area = PI*(radio * radio);

alert ('el area del circulo es: ' 
    + area);