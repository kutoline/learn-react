import { useCounter } from "./use-counter";

export const Counter = ({ min = 1, max = 10 }) => {
  const { count, setDecrement, setIncrement } = useCounter(min);

  return (
    <div className="">
      <button disabled={count === min} onClick={() => setDecrement(count)}>
        -
      </button>
      <span>{count}</span>
      <button disabled={count === max} onClick={() => setIncrement(count)}>
        +
      </button>
    </div>
  );
};
