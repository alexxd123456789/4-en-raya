import { useState } from "react"
import { calcularX } from "../helpers/calcularX";
import { comprobarGanador } from "../helpers/comprobarGanador";
import { GameContext } from "./GameContext"



export const GameProvider = ({children}) => {
    let partidaInicial = [];

    for(let i = 0; i < 6; i++){
        partidaInicial.push([0,0,0,0,0,0,0]);
    }

    const [turno, setTurno] = useState(1);
    const [partida, setPartida] = useState(partidaInicial);
    const [ganador, setGanador] = useState(0);
    const [nturno, setNturno] = useState(0);

    const cambiarTurno = () => {
        setTurno(turno => turno == 1 ? 2 : 1);
    }

    const ponerFicha = (y) => {
        const x = calcularX(partida, y);
        if(partida[x][y] == 0){
            setPartida(tablero => {
                const nValor = tablero;
                nValor[x][y] = turno;
                setGanador(comprobarGanador(nValor));
                return nValor;
            });

            cambiarTurno();
            setNturno(turnos => turnos+1);
        }
    }

    const restart = () => {
        setPartida(partidaInicial);
        setTurno(1);
        setGanador(0);
        setNturno(0);
    }
    
    
    
    
    return (
        <GameContext.Provider value={{partida, ponerFicha, ganador, turno, nturno, restart}}>
            {children}
        </GameContext.Provider>
    )
}
