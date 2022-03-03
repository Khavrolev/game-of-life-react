import { BOARD_SIZE } from "./constants";

export const initBoard = (isEmpty) => {
  const initState = {};

  if (isEmpty) {
    return initState;
  }

  for (let i = 0; i < BOARD_SIZE.rows; i++) {
    for (let j = 0; j < BOARD_SIZE.columns; j++) {
      if (Math.round(Math.random()) === 1) {
        initState[`${i}-${j}`] = true;
      }
    }
  }

  return initState;
};
