import { useSelector } from "react-redux";
import { getCartDishIds } from "../../store/entities/cart/slice";
import { Cart } from "./Cart";
import { useContext } from "react";
import { AuthContext } from "../AuthContext/AuthContext";

export const CartContainer = () => {
  const dishIds = useSelector(getCartDishIds);
  const { user } = useContext(AuthContext);

  if (!user) {
    return null;
  }

  if (!dishIds.length) {
    return <p>корзина пуста</p>;
  }

  return <Cart dishIds={dishIds} />;
};
