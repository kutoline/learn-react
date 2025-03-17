import { Counter } from "../../../common/components/Counter/Counter";

export const ReviewRatingCounter = ({
  minRating,
  maxRating,
  handleChangeRatingReview,
  currentRating,
}) => {
  const handleDecreaseRating = (e, rating) => {
    e.preventDefault();
    const newRatingValue = rating - 1;

    handleChangeRatingReview("rating", newRatingValue);
  };

  const handleIncreaseRating = (e, rating) => {
    const newRatingValue = rating + 1;

    e.preventDefault();
    handleChangeRatingReview("rating", newRatingValue);
  };

  return (
    <>
      <Counter
        handleDecrease={handleDecreaseRating}
        handleIncrease={handleIncreaseRating}
        count={currentRating}
        minDisabled={currentRating <= minRating}
        maxDisabled={currentRating === maxRating}
      />
      <input type="hidden" name="rating" value={currentRating} />
    </>
  );
};
