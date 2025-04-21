import { RestaurantMenu } from "./partials/RestaurantMenu";
import { RestaurantReviews } from "./partials/RestaurantReviews";

export const RestaurantQuickView = ({ id, name, menu, reviews }) => {
  return (
    <div>
      <h1>{name}</h1>
      <RestaurantMenu menuIds={menu} restaurantId={id} />
      <RestaurantReviews restaurantId={id} reviewIds={reviews} />
    </div>
  );
};
