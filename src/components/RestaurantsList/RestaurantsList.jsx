import { useSelector } from "react-redux";
import { RestaurantsTabs } from "../RestaurantsTabs/RestaurantsTabs";
import { getRestaurantsIds } from "../../store/entities/restaurants/slice";

export const RestaurantsList = () => {
  const restaurantsIds = useSelector(getRestaurantsIds);

  if (!restaurantsIds.length) {
    return <p>Пока что нет доступных ресторанов</p>;
  }

  return <RestaurantsTabs restaurantsIds={restaurantsIds} />;
};
