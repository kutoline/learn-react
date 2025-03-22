import { Counter } from "../../../common/components/Counter/Counter";
import { useCounter } from "../../../common/hooks/use-counter";

export const DishCounter = ({ minDishQuantity, maxDishQty }) => {
  const { count, setIncrement, setDecrement } = useCounter(minDishQuantity);

  return (
    <Counter
      handleDecrease={setDecrement}
      handleIncrease={setIncrement}
      count={count}
      minDisabled={count === minDishQuantity}
      maxDisabled={count === maxDishQty}
    />
  );
};
