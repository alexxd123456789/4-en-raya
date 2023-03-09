const comprobarDireccion = (x,y,derecha, arriba, partida, tipo ,contador = 1) => {
    if((y == 0 && derecha == -1) || (x == 0 && arriba == 1)){
        return contador;
    }

    if((x == partida.length - 1 && arriba == -1) || (y == partida[0].length - 1 && derecha == 1)){
        return contador;
    }

    if(partida[x-arriba][y+derecha] != tipo){
        return contador;
    }

    return comprobarDireccion(x-arriba,y+derecha,derecha,arriba,partida,tipo,contador+1);
}

export const comprobarGanador = (partida, winCondition) => {
    let ganador = 0;

    partida.forEach((fila, x) => {
        fila.forEach((celda, y) => {
            if(celda != 0){
                for(let j = -1; j < 2; j++){
                    for(let i = -1; i < 2; i++){
                        if(j == 0 && i == 0){
                            continue;
                        }
                        if(comprobarDireccion(x,y,j,i,partida, celda) == winCondition){
                            ganador = celda;
                        }
                    }

                }

            }
        })
    });

    return ganador;
}