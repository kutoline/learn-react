import { RestaurantsTabs } from "../RestaurantsTabs/RestaurantsTabs";

export const RestaurantsList = ({ restaurants }) => {
  if (!restaurants.length) {
    return <p>Пока что нет доступных ресторанов</p>;
  }

  return <RestaurantsTabs restaurants={restaurants} />;
};
