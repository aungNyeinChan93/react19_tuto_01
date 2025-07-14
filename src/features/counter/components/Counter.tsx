import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { type AppDispatch, type RootState } from "../../../store";
import { increment, decrement, reset } from "../CounterSlice";

const Counter = () => {
  const { count } = useSelector((store: RootState) => store.counter);
  const dispatch: AppDispatch = useDispatch();
  return (
    <React.Fragment>
      <section>{count}</section>
      <button type="button" onClick={() => dispatch(increment())}>
        +
      </button>
      <button type="button" onClick={() => dispatch(decrement())}>
        -
      </button>
      <button type="button" onClick={() => dispatch(reset())}>
        Reset
      </button>
    </React.Fragment>
  );
};

export default Counter;
