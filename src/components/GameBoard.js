import React, { useState } from 'react';

import { randomArray, organizePuzzle } from '../helpers/GameHelper';

const GameBoard = () => {
  const [gameBoard, setGameBoard] = useState(randomArray());

  const organizeBoard = (swappingNo) => {
    let newBoard = organizePuzzle(gameBoard, swappingNo);
    setGameBoard([...newBoard]);
  }

  return (
    <div id="content" className="main-container">
      {
        gameBoard.map((items, row) => (
          <div key={row} className="box-container">
            {items.map((item, col) => (
              <div
                key={item}
                className={`box ${item === 16 && 'opacity-0'}`}
                onClick={()=> organizeBoard(item)}
              >
                {item}
              </div>
            ))}
          </div>
        ))
      }
    </div>
  )
}

export default GameBoard;
