import { initBoard } from "./utils/init";
import "./App.css";
import { useCallback, useState } from "react";
import { getNextStep } from "./utils/getNextStep";
import useInterval from "use-interval";
import Control from "./components/Control/Control";
import Board from "./components/Board/Board";
import { BOARD_SIZE, DELAY_TIMEOUT } from "./utils/constants";

const App = () => {
  const [state, setState] = useState(initBoard(true));

  const [run, setRun] = useState(false);

  useInterval(
    () => {
      setState(getNextStep(state, BOARD_SIZE));
    },
    run ? DELAY_TIMEOUT : null
  );

  const changeState = useCallback((value) => {
    setState(value);
  }, []);

  const startLiving = useCallback(() => {
    setRun((value) => !value);
  }, []);

  const makeStep = useCallback((value) => {
    setState(getNextStep(value, BOARD_SIZE));
  }, []);

  return (
    <div>
      <h1 className="head">Game of Life</h1>
      <Control
        startLiving={startLiving}
        makeStep={makeStep}
        changeState={changeState}
        run={run}
        state={state}
      />
      <Board changeState={changeState} run={run} state={state} />
    </div>
  );
};

export default App;
