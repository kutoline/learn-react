import { useContext } from "react";
import { ReviewForm } from "../../ReviewForm/ReviewForm";
import { AuthContext } from "../../AuthContext/AuthContext";
import { ReviewContainer } from "./Review/ReviewContainer";

export const RestaurantReviews = ({ reviewIds }) => {
  const { user } = useContext(AuthContext);

  if (!reviewIds.length) {
    return <p>Никто не оставил отзывов об этом ресторане</p>;
  }

  return (
    <div>
      <h2>Отзывы</h2>
      <ul>
        {reviewIds.map((id) => {
          return <ReviewContainer key={id} id={id} />;
        })}
      </ul>
      {user && <ReviewForm formTitle="Написать отзыв" />}
    </div>
  );
};
