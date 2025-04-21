import { useDispatch, useSelector } from "react-redux";
import { getDishByRestaurantId } from "../../../../store/entities/dishes/slice";
import { Dish } from "./Dish";
import { useCounter } from "../../../../common/hooks/use-counter";
import { MIN_DISH_QUANTITY } from "../../constants/dish-counter";
import { addToCart, removeFromCart } from "../../../../store/entities/cart/slice";

export const DishContainer = ({ id }) => {
  const dish = useSelector((state) => getDishByRestaurantId(state, id));
  const { count, setIncrement, setDecrement } = useCounter(MIN_DISH_QUANTITY);

  const dispatch = useDispatch();

  const handleAddToCartDish = () => {
    setIncrement();
    dispatch(addToCart({ ...dish, amount: count + 1 }));
  };

  const handleRemoveFromCartDish = () => {
    setDecrement();
    dispatch(removeFromCart({ ...dish, amount: count -1 }));
  };

  return (
    <Dish
      {...dish}
      count={count}
      handleRemoveFromCartDish={handleRemoveFromCartDish}
      handleAddToCartDish={handleAddToCartDish}
    />
  );
};
