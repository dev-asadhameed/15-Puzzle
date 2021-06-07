export const randomArray = () => {
  const newArray = []
  let shuffled = [11, 13, 3, 4, 9, 6, 5, 8, 7, 16, 12, 10, 2, 14, 15, 1];

  let i = 0;
  while(i < 4) {
    const val = shuffled.splice(0,4);
    newArray.push(val);
    i++;
  }

  return newArray;
};

export const findAdjacents = (gameBoard) => {
  let adjacents = [];

  gameBoard.forEach((row, rowIndex) => {
    row.forEach((col, colIndex) => {
      if (col === 16) {
        if((gameBoard[rowIndex + 1] || [])[colIndex]) adjacents.push(gameBoard[rowIndex + 1][colIndex])
        if((gameBoard[rowIndex - 1] || [])[colIndex]) adjacents.push(gameBoard[rowIndex - 1][colIndex])
        if((gameBoard[rowIndex] || [])[colIndex - 1]) adjacents.push(gameBoard[rowIndex][colIndex - 1])
        if((gameBoard[rowIndex] || [])[colIndex + 1]) adjacents.push(gameBoard[rowIndex][colIndex + 1])
      }
    })
  })

  return adjacents
}

export const organizePuzzle = (gameBoard, swappingNo) => {
  let adjacents = findAdjacents(gameBoard);
  let breakLoop = false;

  if (!adjacents.includes(swappingNo)) return gameBoard

  for (const [rowIndex, row] of gameBoard.entries()) {
    for (const [colIndex, col] of row.entries()) {
      if (col === 16) {
        if((gameBoard[rowIndex + 1] || [])[colIndex] && gameBoard[rowIndex + 1][colIndex] === swappingNo) {
          gameBoard[rowIndex + 1][colIndex] = 16;
        }
        else if((gameBoard[rowIndex - 1] || [])[colIndex] && gameBoard[rowIndex - 1][colIndex] === swappingNo) {
          gameBoard[rowIndex - 1][colIndex] = 16;
        }
        else if((gameBoard[rowIndex] || [])[colIndex - 1] && gameBoard[rowIndex][colIndex - 1] === swappingNo) {
          gameBoard[rowIndex][colIndex - 1] = 16;
        }
        else if((gameBoard[rowIndex] || [])[colIndex + 1] && gameBoard[rowIndex][colIndex + 1] === swappingNo) {
          gameBoard[rowIndex][colIndex + 1] = 16;
        }
        gameBoard[rowIndex][colIndex] = swappingNo;
        breakLoop = true
        break;
      }
    }
    if (breakLoop) break;
  }

  return gameBoard;
}
