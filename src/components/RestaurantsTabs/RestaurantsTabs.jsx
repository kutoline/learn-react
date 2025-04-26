import { useState } from "react";
import styles from "./restaurants-tabs.module.css";
import { RestaurantQuickViewContainer } from "../RestaurantQuickView/RestaurantQuickViewContainer";
import { RestaurantTabContainer } from "./partials/RestaurantTabContainer";

export const RestaurantsTabs = ({ restaurantsIds }) => {
  const [selectedRestaurantId, setSelectedRestaurantId] = useState(
    restaurantsIds.at(0)
  );

  const handleSelectedRestaraunt = (id) => {
    if (id === selectedRestaurantId) {
      return;
    }

    setSelectedRestaurantId(id);
  };

  return (
    <div>
      <div className={styles.restaurantsTabs__navigation}>
        {restaurantsIds.map((id) => {
          return (
            <RestaurantTabContainer
              handleSelectedRestaraunt={handleSelectedRestaraunt}
              key={id}
              id={id}
              selectedRestaurantId={selectedRestaurantId}
            />
          );
        })}
      </div>
      <div className={styles.restaurantsTabs__content}>
        <RestaurantQuickViewContainer
          key={selectedRestaurantId}
          selectedRestaurantId={selectedRestaurantId}
        />
      </div>
    </div>
  );
};
