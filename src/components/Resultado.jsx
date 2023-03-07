import React, { useContext } from 'react'
import { GameContext } from '../context/GameContext';

export const Resultado = () => {
    const {restart, nturno, ganador} = useContext(GameContext);

    console.log({nturno})

    if(ganador == 0 && nturno < 42){
        return <></>;
    }
    

    if(ganador == 0){
      return (
        <div id='empate' className='result'>
          <div>
            <p>Vaya, habeis empatado...</p>
            <button onClick={restart}>Reiniciar</button>
          </div>
        </div>
      )
    }

    
  return (
    <div id="victoria" className='result'>
        <div>
            <p>Ha ganado el jugador {ganador}</p>
            <button onClick={restart}>Reiniciar</button>
        </div>
    </div>
  )
}