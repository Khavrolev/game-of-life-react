import { initBoard } from "../../utils/init";
import Button from "../Button/Button";
import classes from "./Control.module.css";

const Control = ({ changeState, startLiving, makeStep, run, state }) => {
  return (
    <div className={classes.control}>
      <Button onClick={startLiving}>{run ? "Stop" : "Start"}</Button>
      <Button onClick={() => makeStep(state)} disabled={run}>
        Step
      </Button>
      <Button onClick={() => changeState(initBoard(false))} disabled={run}>
        Random init
      </Button>
      <Button onClick={() => changeState(initBoard(true))} disabled={run}>
        Clear
      </Button>
    </div>
  );
};

export default Control;
