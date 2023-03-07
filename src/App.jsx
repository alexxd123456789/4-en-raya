import React, { useContext } from 'react'
import { Resultado } from './components/Resultado';
import { Tablero } from './components/Tablero';
import { GameContext } from './context/GameContext'

export const App = () => {
  const {turno} = useContext(GameContext);
  
  
  
  return (
    <>
    <Resultado/>
    <h1>4 en raya</h1>
    <h3>Turno del jugador {turno}:</h3>

    <Tablero/>
    
    </>
  )
}
