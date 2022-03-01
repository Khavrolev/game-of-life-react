import { initBoard } from "../../utils/init";
import Button from "../button/Button";
import classes from "./Control.module.css";

const Control = ({ changeBoard, startLiving, makeStep, run, board }) => {
  return (
    <div className={classes.control}>
      {<Button onClick={startLiving}>{run ? "Stop" : "Start"}</Button>}
      <Button onClick={() => makeStep(board)} disabled={run}>
        Step
      </Button>
      <Button onClick={() => changeBoard(initBoard(false))} disabled={run}>
        Random init
      </Button>
      <Button onClick={() => changeBoard(initBoard(true))} disabled={run}>
        Clear
      </Button>
    </div>
  );
};

export default Control;
