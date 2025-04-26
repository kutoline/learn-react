import { useSelector } from "react-redux";
import { addToCart, getDishAmountById, removeFromCart } from "../../../../store/entities/cart/slice";
import { useDispatch } from "react-redux";

export const useCartDish = (dish, id) => {
  const dishAmount = useSelector((state) => getDishAmountById(state, id)) ?? 0;

  const dispatch = useDispatch();

  const handleAddToCartDish = () => {
    dispatch(addToCart(dish));
  };

  const handleRemoveFromCartDish = () => {
    dispatch(removeFromCart(dish));
  };

  return {
    dishAmount,
    handleAddToCartDish,
    handleRemoveFromCartDish,
  };
};
