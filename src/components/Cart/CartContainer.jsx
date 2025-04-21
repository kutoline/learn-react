import { useSelector } from "react-redux";
import { getCart } from "../../store/entities/cart/slice";
import { Cart } from "./Cart";
import { useContext } from "react";
import { AuthContext } from "../AuthContext/AuthContext";

export const CartContainer = () => {
  const cart = useSelector(getCart);
  const { user } = useContext(AuthContext);

  if (!user) {
    return null;
  }

  if (!cart.products.length) {
    return <p>корзина пуста</p>;
  }

  return <Cart cart={cart} />;
};
