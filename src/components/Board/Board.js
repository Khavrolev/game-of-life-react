import classNames from "classnames";
import { BOARD_SIZE } from "../../utils/constants";
import classes from "./Board.module.css";

const Board = ({ changeState, run, state }) => {
  const handleCellClick = (event) => {
    if (run) {
      return;
    }

    const row = event.target.dataset.row;
    const column = event.target.dataset.column;
    const cell = `${row}-${column}`;

    let newState = { ...state };

    if (newState[cell]) {
      delete newState[cell];
    } else {
      newState[cell] = true;
    }

    changeState(newState);
  };

  const getBoard = () => {
    const board = [];
    for (let i = 0; i < BOARD_SIZE.rows; i++) {
      for (let j = 0; j < BOARD_SIZE.columns; j++) {
        board.push(
          <div
            key={`${i}-${j}`}
            className={classNames(classes.cell, {
              [classes.cell__filled]: state[`${i}-${j}`],
              [classes.cell__pointer]: !run,
            })}
            data-row={i}
            data-column={j}
          />
        );
      }
    }
    return board;
  };

  return (
    <div
      style={{ gridTemplateColumns: `repeat(${BOARD_SIZE.columns}, 20px)` }}
      className={classes.board}
      onClick={(event) => handleCellClick(event)}
    >
      {getBoard()}
    </div>
  );
};

export default Board;
