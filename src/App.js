import { initBoard } from "./utils/init";
import "./App.css";
import { useCallback, useState } from "react";
import { getNextStep } from "./utils/getNextStep";
import useInterval from "use-interval";
import Control from "./components/Control/Control";
import Board from "./components/Board/Board";
import { DELAY_TIMEOUT } from "./utils/constants";

const App = () => {
  const [board, setBoard] = useState(initBoard(true));

  const [run, setRun] = useState(false);

  useInterval(
    () => {
      setBoard(getNextStep(board));
    },
    run ? DELAY_TIMEOUT : null
  );

  const changeBoard = useCallback((value) => {
    setBoard(value);
  }, []);

  const startLiving = useCallback(() => {
    setRun((value) => !value);
  }, []);

  const makeStep = useCallback((value) => {
    setBoard(getNextStep(value));
  }, []);

  return (
    <div>
      <h1 className="head">Game of Life</h1>
      <Control
        startLiving={startLiving}
        makeStep={makeStep}
        changeBoard={changeBoard}
        run={run}
        board={board}
      />
      <Board changeBoard={changeBoard} run={run} board={board} />
    </div>
  );
};

export default App;
