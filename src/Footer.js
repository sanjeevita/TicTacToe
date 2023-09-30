import React from 'react'
import { useGameContext } from './Context'
function Footer() {
  const {currentSquares, Winner} = useGameContext();
  let display = Winner(currentSquares)? "Thank you for playing the Game" : "Game in Progress";
  return (
    <div className='footer'>
    <h1>{display}</h1>
    </div>
  )
}

export default Footer