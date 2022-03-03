const ALIVE_FOR_ALIVE = [2, 3];
const ALIVE_FOR_DEAD = [3];

export const getNextStep = (currentState, size) => {
  const neighbors = Object.keys(currentState)
    .reduce((sum, cell) => {
      sum.push(cell, ...getNeighbors(size, cell));
      return sum;
    }, [])
    .sort();

  const nextState = [...new Set(neighbors)].reduce((sum, cell) => {
    const counter = countNeighbors(currentState, size, cell);

    if (
      (currentState[cell] && ALIVE_FOR_ALIVE.includes(counter)) ||
      (!currentState[cell] && ALIVE_FOR_DEAD.includes(counter))
    ) {
      sum[cell] = true;
    }

    return sum;
  }, {});

  return nextState;
};

export const countNeighbors = (currentState, size, cell) => {
  const neighbors = getNeighbors(size, cell);

  return neighbors.filter((cell) => currentState[cell]).length;
};

export const getNeighbors = (size, cell) => {
  const coordinates = getCoordinates(cell);

  const topRow = coordinates.row === 0 ? size.rows - 1 : coordinates.row - 1;
  const bottomRow = coordinates.row === size.rows - 1 ? 0 : coordinates.row + 1;
  const leftColumn =
    coordinates.column === 0 ? size.columns - 1 : coordinates.column - 1;
  const rightColumn =
    coordinates.column === size.columns - 1 ? 0 : coordinates.column + 1;

  return [
    `${topRow}-${leftColumn}`,
    `${topRow}-${coordinates.column}`,
    `${topRow}-${rightColumn}`,
    `${coordinates.row}-${leftColumn}`,
    `${coordinates.row}-${rightColumn}`,
    `${bottomRow}-${leftColumn}`,
    `${bottomRow}-${coordinates.column}`,
    `${bottomRow}-${rightColumn}`,
  ];
};

export const getCoordinates = (cell) => {
  const cellArray = cell.split("-");

  if (cellArray.length !== 2 || cellArray.includes("")) {
    throw new Error(`Wrong input`);
  }

  return { row: +cellArray[0], column: +cellArray[1] };
};
