import { Counter } from "../../../../common/components/Counter/Counter";

export const  DishCounter = ({
  minDishQuantity,
  maxDishQuantity,
  setDecrement,
  setIncrement,
  count,
}) => {
  return (
    <Counter
      handleDecrease={setDecrement}
      handleIncrease={setIncrement}
      count={count}
      minDisabled={count === minDishQuantity}
      maxDisabled={count === maxDishQuantity}
    />
  );
};
