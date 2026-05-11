//Crea:

// obtenerRangoHorario(hora) → "mañana" (6-11), "tarde" (12-17), "noche" (18-23), "madrugada" (0-5).
// saludoPersonalizado(nombre, hora) → devuelve "Buenos días [nombre]", etc., usando obtenerRangoHorario.

function obtenerRangoHorario(hora){

    if (hora >= 6 && hora <=11){
        return 'mañana';
    }

    else if (hora >= 12 && hora >=17){
        return 'tarde';
    }

    else if (hora >= 18 && hora <=23){
        return 'noche';
    }

    else{
        return 'madrugada';
    }
}

function saludoPersonalizado (nombre,hora){

    let rango = obtenerRangoHorario(hora);

    if (rango === 'mañana'){
        return `Buenos días ${nombre}`;
    }

    


}