import {
  MAX_DISH_QUANTITY,
  MIN_DISH_QUANTITY,
} from "../constants/dish-counter";
import { DishCounter } from "./DishCounter";

export const Dish = ({ name, price, ingredients }) => {
  return (
    <>
      <p>
        {name} - {price}$
      </p>
      <span>{ingredients.join(", ")}</span>
      <DishCounter
        minDishQty={MIN_DISH_QUANTITY}
        maxDishQty={MAX_DISH_QUANTITY}
      />
    </>
  );
};
