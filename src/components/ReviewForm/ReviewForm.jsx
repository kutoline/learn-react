import { useForm } from "./use-form";
import { ReviewRatingCounter } from "./partials/ReviewRatingCounter";
import { MIN_RATING, MAX_RATING } from "./constants/rating-counter";
import { Textarea } from "../../common/components/Textarea/Textarea";
import { Input } from "../../common/components/Input/Input";

export const ReviewForm = ({ formTitle = "" }) => {
  const {
    state: { name, text, rating },
    handleResetForm,
    handleSetNameValue,
    handleSetTextValue,
    handleSetRatingValue,
  } = useForm({ name: "", text: "", rating: 0 });

  return (
    <div>
      {formTitle && <h3>{formTitle}</h3>}
      <form onSubmit={(e) => e.preventDefault()}>
        <Input
          name="name"
          handleChange={(e) => handleSetNameValue(e.target.value)}
          value={name}
        />

        <Textarea
          name="text"
          value={text}
          handleChange={(e) => handleSetTextValue(e.target.value)}
        />

        <ReviewRatingCounter
          currentRating={rating}
          minRating={MIN_RATING}
          maxRating={MAX_RATING}
          handleChangeRatingReview={handleSetRatingValue}
        />
        <button onClick={handleResetForm}>Clear</button>
      </form>
    </div>
  );
};
