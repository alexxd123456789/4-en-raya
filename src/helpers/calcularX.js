export const calcularX = (partida, y) => {
    for(let i = 0; i<6; i++){
        if(partida[i][y] != 0){
            return i == 0 ? 0 : i-1;
        }
    }
    return partida.length - 1;
}