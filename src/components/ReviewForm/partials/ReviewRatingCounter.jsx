import { Counter } from "../../../common/components/Counter/Counter";
import { useCallback } from "react";

export const ReviewRatingCounter = ({
  minRating,
  maxRating,
  handleChangeRatingReview,
  currentRating,
}) => {
  const handleDecreaseRating = useCallback(
    (rating) => {
      const newRatingValue = rating - 1;
      handleChangeRatingReview(newRatingValue);
    },
    [handleChangeRatingReview]
  );

  const handleIncreaseRating = useCallback(
    (rating) => {
      const newRatingValue = rating + 1;
      handleChangeRatingReview(newRatingValue);
    },
    [handleChangeRatingReview]
  );

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
