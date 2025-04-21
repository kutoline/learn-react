import React from "react";
import { useSelector } from "react-redux";
import { getReviewById } from "../../../../store/entities/reviews/slice";
import { Review } from "./Review";
import { getUserById } from "../../../../store/entities/users/slice";

export const ReviewContainer = ({ id }) => {
  const { text, rating, userId } = useSelector((state) => getReviewById(state, id));
  const { name } = useSelector((state) => getUserById(state, userId));

  return <Review text={text} rating={rating} user={name} />;
};
