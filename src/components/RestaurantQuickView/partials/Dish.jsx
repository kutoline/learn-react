import { MAX_DISH_QTY, MIN_DISH_QTY } from "../constants/dish-counter";
import { DishCounter } from "./DishCounter";

export const Dish = ({ id, name, price, ingredients }) => {
  return (
    <>
      <p>
        {name} - {price}$
      </p>
      <span>{ingredients.join(", ")}</span>
      <DishCounter
        key={id}
        minDishQty={MIN_DISH_QTY}
        maxDishQty={MAX_DISH_QTY}
      />
    </>
  );
};
