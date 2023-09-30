import React, { createContext, useContext, useState } from "react";

export const GameContext = createContext();
export const useGameContext = () => useContext(GameContext);

export const Context = ({ children }) => {
  const [isNextX, setisNextX] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setcurrentMove] = useState(0);
  const currentSquares = history[currentMove];

  const handlePlay = (nextSquares) => {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setcurrentMove(nextHistory.length - 1);
    setisNextX(!isNextX);
  };
  const Winner = (squares) => {
    const arr = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < arr.length; i++) {
      const [a, b, c] = arr[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  return (
    <GameContext.Provider
      value={{
        isNextX,
        setisNextX,
        history,
        currentMove,
        setcurrentMove,
        currentSquares,
        handlePlay,
        Winner
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
