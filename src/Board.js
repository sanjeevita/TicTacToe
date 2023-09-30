import "./styles.css";
import React from "react";
import Square from "./Square";
import { useGameContext } from "./Context";

const Board = () => {
  const { currentSquares, isNextX, Winner } = useGameContext();

 let winner=Winner(currentSquares);
  let status;
  if (winner) status = "Winner is: " + winner;
  else if (!currentSquares.includes(null)) status = "Its a draw!";
  else {
    status = "Next turn: " + (isNextX ? "X" : "O");
  }
const arr=Array(9).fill(null);
  return (
    <>
      <div className="status">{status}</div>
{
  
  arr.map((a,i)=>{
    return <Square index={i}/>
  })

}


    </>
  );
};
export default Board;