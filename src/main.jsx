import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./common/styles/styles.css";
import { App } from "./components/App/App";

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

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
