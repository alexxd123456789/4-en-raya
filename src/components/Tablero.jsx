import React, { useContext } from 'react'
import { GameContext } from '../context/GameContext'
import { Celda } from './Celda';

export const Tablero = () => {
    const {partida} = useContext(GameContext);
    
    
    
  return (
    <div id="tablero">
      {
        partida.map((fila, x) =>{
          return (
            <React.Fragment key={x}>
              {
                fila.map((celda, y) => {
                  return (
                    <Celda valor={celda} pos={y} key={`${x}-${y}`}/>
                  )
                })
              }
            </React.Fragment>
          )
        })
      }
    </div>
  )
}
