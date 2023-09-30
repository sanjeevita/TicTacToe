import React from 'react'
import { useGameContext } from './Context'

function Header() {
    const {Winner, currentSquares}=useGameContext();
    let winner=Winner(currentSquares);
    let status;
    status = winner ? "Winner is: " + winner : "Welcome";
  return (
    <div className='header'>
    <h1 >{status}</h1>
    </div>
  )
}

export default Header;