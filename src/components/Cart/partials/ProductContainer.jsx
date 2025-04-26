import React from "react";
import { Product } from "./Product";
import { useSelector } from "react-redux";
import { getDishFromCartById } from "../../../store/entities/cart/slice";

export const ProductContainer = ({ id }) => {
  const { name, price, amount } = useSelector((state) =>
    getDishFromCartById(state, id)
  );

  return <Product key={id} name={name} price={price} amount={amount} />;
};
