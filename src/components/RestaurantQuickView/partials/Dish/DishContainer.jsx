import { useSelector, useDispatch } from "react-redux";
import { getDishById } from "../../../../store/entities/dishes/slice";
import { Dish } from "./Dish";
import { useCartDish } from "./use-cart-dish";
import { MIN_DISH_QUANTITY } from "../../constants/dish-counter";

export const DishContainer = ({ id }) => {
  const dish = useSelector((state) => getDishById(state, id));
  const { dishAmount, handleAddToCartDish, handleRemoveFromCartDish } =
    useCartDish(dish, id);

  return (
    <Dish
      {...dish}
      count={dishAmount}
      handleRemoveFromCartDish={handleRemoveFromCartDish}
      handleAddToCartDish={handleAddToCartDish}
    />
  );
};
