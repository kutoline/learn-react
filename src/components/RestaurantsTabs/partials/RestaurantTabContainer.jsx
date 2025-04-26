import React from "react";
import { Button } from "../../../common/components/Button/Button";
import { useSelector } from "react-redux";
import { getRestaurantById } from "../../../store/entities/restaurants/slice";

export const RestaurantTabContainer = ({
  id,
  handleSelectedRestaraunt,
  selectedRestaurantId,
}) => {
  const restaurant = useSelector((state) => getRestaurantById(state, id));
  return (
    <Button
      handleButtonClick={() => handleSelectedRestaraunt(id)}
      active={id === selectedRestaurantId}
    >
      {restaurant.name}
    </Button>
  );
};
