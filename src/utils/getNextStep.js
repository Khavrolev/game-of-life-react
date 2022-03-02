const ALIVE_FOR_ALIVE = [2, 3];
const ALIVE_FOR_DEAD = [3];

export const getNextStep = (currentState, size) => {
  const nextState = [];
  const neighbors = [];

  currentState.forEach((cell) =>
    neighbors.push(cell, ...getNeighbors(size, cell))
  );

  const uniqueNeighbors = new Set(neighbors);

  uniqueNeighbors.forEach((cell) => {
    const counter = countNeighbors(currentState, size, cell);

    if (
      (currentState.includes(cell) && ALIVE_FOR_ALIVE.includes(counter)) ||
      (!currentState.includes(cell) && ALIVE_FOR_DEAD.includes(counter))
    ) {
      nextState.push(cell);
    }
  });

  return nextState.sort();
};

export const countNeighbors = (currentState, size, cell) => {
  const neighbors = getNeighbors(size, cell);

  return neighbors.filter((cell) => currentState.includes(cell)).length;
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
