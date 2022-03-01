import classNames from "classnames";
import { BOARD_SIZE } from "../../utils/constants";
import classes from "./Board.module.css";

const Board = ({ changeBoard, run, board }) => {
  const handleCellClick = (event) => {
    if (run) {
      return;
    }

    const row = event.target.dataset.row;
    const column = event.target.dataset.column;

    let newBoard = [...board];
    newBoard[row][column] = board[row][column] ? 0 : 1;
    changeBoard(newBoard);
  };

  return (
    <div
      style={{ gridTemplateColumns: `repeat(${BOARD_SIZE.columns}, 20px)` }}
      className={classes.board}
      onClick={(event) => handleCellClick(event)}
    >
      {board.map((rows, i) =>
        rows.map((columns, j) => (
          <div
            key={`${i}${j}`}
            className={classNames(classes.cell, {
              [classes.cell__filled]: board[i][j],
              [classes.cell__pointer]: !run,
            })}
            data-row={i}
            data-column={j}
          />
        ))
      )}
    </div>
  );
};

export default Board;
