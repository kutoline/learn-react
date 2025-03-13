import { RestaurantMenu } from "./partials/RestaurantMenu";
import { RestaurantReviews } from "./partials/RestaurantReviews";

export const RestaurantQuickView = ({ name, menu, reviews }) => {
  return (
    <div>
      <h1>{name}</h1>
      <RestaurantMenu menu={menu} />
      <RestaurantReviews reviews={reviews} />
    </div>
  );
};
