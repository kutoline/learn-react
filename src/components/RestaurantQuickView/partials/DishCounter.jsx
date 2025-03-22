import { Counter } from "../../../common/components/Counter/Counter";
import { useCounter } from "../../../common/hooks/use-counter";

export const DishCounter = ({ minDishQty, maxDishQty }) => {
  const { count, setIncrement, setDecrement } = useCounter(minDishQty);

  return (
    <Counter
      handleDecrease={setDecrement}
      handleIncrease={setIncrement}
      count={count}
      minDisabled={count === minDishQty}
      maxDisabled={count === maxDishQty}
    />
  );
};
