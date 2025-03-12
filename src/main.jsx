import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { restaurants } from "../materials/mock.js";

const RestaurantReviews = ({ reviews }) => {
  const reviewList = reviews.map(({ id, text }) => <li key={id}>{text}</li>);

  return (
    <div>
      <h3>Отзывы</h3>
      <ul>{reviewList}</ul>
    </div>
  );
};

const RestaurantMenu = ({ menu }) => {
  const menuList = menu.map(({ id, name }) => <li key={id}>{name}</li>);

  return (
    <div>
      <h3>Меню</h3>
      <ul>{menuList}</ul>
    </div>
  );
};

const Restaurant = ({ name, menu, reviews }) => {
  return (
    <div>
      <h2>{name}</h2>
      <RestaurantMenu menu={menu} />
      <RestaurantReviews reviews={reviews} />
    </div>
  );
};

const RestaurantsList = ({ restaurants }) => {
  const restarauntsList = restaurants.map(({ id, name, menu, reviews }) => (
    <Restaurant key={id} name={name} menu={menu} reviews={reviews} />
  ));

  return <div>{restarauntsList}</div>;
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RestaurantsList restaurants={restaurants} />
  </StrictMode>
);
