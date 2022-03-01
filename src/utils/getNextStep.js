const ALIVE_FOR_ALIVE = [2, 3];
const ALIVE_FOR_DEAD = [3];

export const getNextStep = (currentState) => {
  if (!Array.isArray(currentState)) {
    throw new Error(`Board is't array`);
  }

  const nextState = [];

  for (let row = 0; row < currentState.length; row++) {
    if (!Array.isArray(currentState[row])) {
      throw new Error(`Board contains not array`);
    }

    if (currentState[row].length !== currentState[0].length) {
      throw new Error(`Arrays in array does't have same dimensions`);
    }

    nextState.push([]);

    for (let column = 0; column < currentState[row].length; column++) {
      const neighbors = getNeighbors(currentState, row, column);

      if (currentState[row][column] === 1) {
        if (ALIVE_FOR_ALIVE.includes(neighbors)) {
          nextState[row][column] = 1;
        } else {
          nextState[row][column] = 0;
        }
      } else {
        if (ALIVE_FOR_DEAD.includes(neighbors)) {
          nextState[row][column] = 1;
        } else {
          nextState[row][column] = 0;
        }
      }
    }
  }

  return nextState;
};

export const getNeighbors = (currentState, row, column) => {
  const totalRows = currentState.length;
  const totalColumns = currentState[0].length;

  const topRow = row === 0 ? totalRows - 1 : row - 1;
  const bottomRow = row === totalRows - 1 ? 0 : row + 1;
  const leftColumn = column === 0 ? totalColumns - 1 : column - 1;
  const rightColumn = column === totalColumns - 1 ? 0 : column + 1;

  return (
    currentState[topRow][leftColumn] +
    currentState[topRow][column] +
    currentState[topRow][rightColumn] +
    currentState[row][leftColumn] +
    currentState[row][rightColumn] +
    currentState[bottomRow][leftColumn] +
    currentState[bottomRow][column] +
    currentState[bottomRow][rightColumn]
  );
};
