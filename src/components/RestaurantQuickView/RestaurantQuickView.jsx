import { Counter } from "../../common/components/Counter/Counter";

const RestaurantMenu = ({ menu }) => {
  if (!menu.length) {
    return <p>Ресторан пока что не опубликовал свое меню</p>;
  }

  return (
    <ul>
      <h2>Меню</h2>
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
  );
};

export const RestaurantReviews = ({ reviews }) => {
  if (!reviews.length) {
    return <p>Никто не оставил отзывов об этом ресторане</p>;
  }

  return (
    <div>
      <h2>Отзывы</h2>
      <div>
        {reviews.map(({ id, user, text, rating }) => {
          return (
            <div key={id}>
              <p>{user}</p>
              <p>{text}</p>
              <p>{rating}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const RestaurantQuickView = ({ name, menu, reviews }) => {
  return (
    <div>
      <h1>{name}</h1>
      <RestaurantMenu menu={menu} />
      <RestaurantReviews reviews={reviews} />
    </div>
  );
};
