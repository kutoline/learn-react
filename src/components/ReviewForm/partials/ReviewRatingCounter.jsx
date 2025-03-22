import { Counter } from "../../../common/components/Counter/Counter";

export const ReviewRatingCounter = ({
  minRating,
  maxRating,
  handleChangeRatingReview,
  currentRating,
}) => {
  const handleDecreaseRating = (rating) => {
    const newRatingValue = rating - 1;
    handleChangeRatingReview(newRatingValue);
  };

  const handleIncreaseRating = (rating) => {
    const newRatingValue = rating + 1;
    handleChangeRatingReview(newRatingValue);
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
