import { useState } from "react";
import styles from "./restaurants-tabs.module.css";
import { RestaurantQuickView } from "../RestaurantQuickView/RestaurantQuickView";
import classNames from "classnames";
import stylesTab from "../../common/components/Tab/Tab.module.css";
import { Button } from "../../common/components/Button/Button";

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
    <div>
      <div className={styles.restaurantsTabs__navigation}>
        {restaurants.map((restaurant) => {
          return (
            <Button
              handleButtonClick={() => handleSelectedRestaraunt(restaurant)}
              key={restaurant.id}
              active={restaurant.id === selectedRestaurant.id}
            >
              {restaurant.name}
            </Button>
          );
        })}
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
