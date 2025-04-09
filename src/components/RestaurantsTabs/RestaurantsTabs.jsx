import { useState } from "react";
import styles from "./restaurants-tabs.module.css";
import { RestaurantQuickView } from "../RestaurantQuickView/RestaurantQuickView";

export const RestaurantsTabs = ({ restaurants }) => {
  const [selectedRestaurant, setSelectedRestaurant] = useState(
    restaurants.at(0)
  );

  const handleSelectedRestaraunt = (restaurant) => {
    if (restaurant.id === selectedRestaurant.id) {
      return;
    }

    setSelectedRestaurant(restaurant);
  };

  return (
    <div className={styles.restaurantsTabs}>
      <div className={styles.restaurantsTabs__navigation}>
        {restaurants.map((restaurant) => (
          <button
            key={restaurant.id}
            onClick={() => handleSelectedRestaraunt(restaurant)}
            className={`${styles.restaurantsTabs__button} ${
              selectedRestaurant.id === restaurant.id
                ? styles.restaurantsTabs__buttonActive
                : ""
            }`}
          >
            {restaurant.name}
          </button>
        ))}
      </div>
      <div className={styles.restaurantsTabs__content}>
        <RestaurantQuickView
          key={selectedRestaurant.id}
          {...selectedRestaurant}
        />
      </div>
    </div>
  );
};
