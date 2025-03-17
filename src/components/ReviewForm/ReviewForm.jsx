import { useForm } from "../../common/hooks/use-form";
import { ReviewRatingCounter } from "./partials/ReviewRatingCounter";
import { MIN_RATING, MAX_RATING } from "./constants/rating-counter";

export const ReviewForm = ({ restaurantId, formTitle = "" }) => {
  const {
    state: { name, text, rating },
    dispatch,
  } = useForm({ name: "", text: "", rating: 0 });

  const handleResetForm = (e) => {
    e.preventDefault();

    dispatch({
      type: "CLEAR_FORM",
      payload: { name: "", text: "", rating: 0 },
    });
  };

  const handleUpdateFieldValue = (name, value) => {
    dispatch({
      type: "UPDATE_FIELD_VALUE",
      payload: { [name]: value },
    });
  };

  return (
    <div>
      {formTitle && <h3>{formTitle}</h3>}
      <form>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) =>
            handleUpdateFieldValue(e.target.name, e.target.value)
          }
        />
        <textarea
          name="text"
          value={text}
          onChange={(e) =>
            handleUpdateFieldValue(e.target.name, e.target.value)
          }
        />
        <ReviewRatingCounter
          currentRating={rating}
          minRating={MIN_RATING}
          maxRating={MAX_RATING}
          handleChangeRatingReview={handleUpdateFieldValue}
          key={`${restaurantId}${rating}`}
        />
        <button onClick={handleResetForm}>Clear</button>
      </form>
    </div>
  );
};
