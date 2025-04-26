import { Dish } from "./Dish/Dish";
import { DishContainer } from "./Dish/DishContainer";

export const RestaurantMenu = ({ menuIds }) => {
  if (!menuIds.length) {
    return <p>Ресторан пока что не опубликовал свое меню</p>;
  }

  return (
    <div>
      <h2>Меню</h2>
      <ul>
        {menuIds.map((id) => {
          return (
            <li key={id}>
              <DishContainer id={id} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
