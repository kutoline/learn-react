import React from "react";
import { RestaurantQuickView } from "./RestaurantQuickView";
import { useSelector } from "react-redux";
import { getRestaurantById } from "../../store/entities/restaurants/slice";

export const RestaurantQuickViewContainer = ({ selectedRestaurantId }) => {
  const restaurant = useSelector((state) =>
    getRestaurantById(state, selectedRestaurantId)
  );

  return <RestaurantQuickView key={selectedRestaurantId} {...restaurant} />;
};
