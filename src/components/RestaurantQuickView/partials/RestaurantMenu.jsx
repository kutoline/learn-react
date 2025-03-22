import { Dish } from "./Dish";

export const RestaurantMenu = ({ menu }) => {
  if (!menu.length) {
    return <p>Ресторан пока что не опубликовал свое меню</p>;
  }

  return (
    <div>
      <h2>Меню</h2>
      <ul>
        {menu.map((dish) => {
          return (
            <li key={dish.id}>
              <Dish {...dish} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
