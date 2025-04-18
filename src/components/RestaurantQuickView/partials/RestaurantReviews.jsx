import { useContext } from "react";
import { ReviewForm } from "../../ReviewForm/ReviewForm";
import { AuthContext } from "../../AuthContext/AuthContext";

export const RestaurantReviews = ({ reviews }) => {
  const { user } = useContext(AuthContext);

  if (!reviews.length) {
    return <p>Никто не оставил отзывов об этом ресторане</p>;
  }

  return (
    <div>
      <h2>Отзывы</h2>
      <ul>
        {reviews.map(({ id, user, text, rating }) => {
          return (
            <li key={id}>
              <p>{user}</p>
              <p>{text}</p>
              <p>{rating}</p>
            </li>
          );
        })}
      </ul>
      {user && <ReviewForm formTitle="Написать отзыв" />}
    </div>
  );
};
