import { Counter } from "../../../common/components/Counter/Counter";

export const RestaurantMenu = ({ menu }) => {
  if (!menu.length) {
    return <p>Ресторан пока что не опубликовал свое меню</p>;
  }

  return (
    <div>
      <h2>Меню</h2>
      <ul>
        {menu.map(({ id, name, price, ingredients }) => {
          return (
            <li key={id}>
              <p>
                {name} - {price}$
              </p>
              <span>{ingredients.join(", ")}</span>
              <Counter key={id} max={5} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
