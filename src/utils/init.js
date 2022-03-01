import { BOARD_SIZE } from "./constants";

export const initBoard = (isEmpty) => {
  const initState = [];
  for (let i = 0; i < BOARD_SIZE.rows; i++) {
    initState.push([]);

    for (let j = 0; j < BOARD_SIZE.columns; j++) {
      initState[i][j] = isEmpty ? 0 : Math.round(Math.random());
    }
  }

  return initState;
};
