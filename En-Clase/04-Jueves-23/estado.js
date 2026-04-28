
import { estudiantes, calcularPromedio } from "./index.js";

estudiantes.forEach(estudiante => {
    const promedio = calcularPromedio(estudiante.notas);

    const estado = promedio >= 3.0 ? "Aprobó" : "Reprobó";

    console.log(`${estudiante.nombre} ${estudiante.apellido}: ${promedio.toFixed(2)} - ${estado}`);
});