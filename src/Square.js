import "./styles.css";
import React from "react";
import { useGameContext } from "./Context";

const Square = ({ index }) => {
  const { currentSquares, isNextX, handlePlay, Winner } = useGameContext();

  const handleClick = () => {
    const nextSquares = currentSquares.slice();
    if (currentSquares[index] || Winner(currentSquares)) return;
    nextSquares[index] = isNextX ? "X" : "O";
    handlePlay(nextSquares);
  };

  return (
    <button className="square" onClick={handleClick}>
      {currentSquares[index]}
    </button>
  );
};
export default Square;