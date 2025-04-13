import { useContext } from "react";
import {
  MAX_DISH_QUANTITY,
  MIN_DISH_QUANTITY,
} from "../constants/dish-counter";
import { DishCounter } from "./DishCounter";
import { AuthContext } from "../../AuthContext/AuthContext";

export const Dish = ({ name, price, ingredients }) => {
  const { user } = useContext(AuthContext);

  return (
    <>
      <p>
        {name} - {price}$
      </p>
      <span>{ingredients.join(", ")}</span>
      {user && (
        <DishCounter
          minDishQuantity={MIN_DISH_QUANTITY}
          maxDishQuantity={MAX_DISH_QUANTITY}
        />
      )}
    </>
  );
};
