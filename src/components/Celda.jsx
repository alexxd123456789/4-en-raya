import React, { useContext } from 'react'
import { GameContext } from '../context/GameContext'

export const Celda = ({valor, pos}) => {
    const {ponerFicha} = useContext(GameContext);
    
    
  return (
    <div className='celda' onClick={() => {ponerFicha(pos)}} >
        <div className="hijo" style={{
        backgroundColor: valor == 0 ? 'white' : valor == 1 ? 'blue' : 'red'
    }}/>
    </div>
  )
}
