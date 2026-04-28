
export const estudiantes = [
  {nombre: "Ana", apellido: "Gómez", notas: [4.5, 3.8, 4.2]},
  {nombre: "Luis", apellido: "Martínez", notas: [3.5, 4.0, 3.9]},
  {nombre: "Camila", apellido: "Rodríguez", notas: [4.8, 4.6, 4.9]},
  {nombre: "Juan", apellido: "Pérez", notas: [3.2, 3.7, 3.5]},
  {nombre: "Sofía", apellido: "López", notas: [4.1, 4.3, 4.0]}
];

export function calcularPromedio(notas) {
    let suma = 0;

    for (let i = 0; i < notas.length; i++) {
        suma += notas[i];
    }

    return suma / notas.length;
}