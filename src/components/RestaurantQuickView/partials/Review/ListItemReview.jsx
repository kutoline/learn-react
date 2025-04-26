import React from "react";

export const ListItemReview = ({ id, user, text, rating }) => {
  return (
    <li key={id}>
      <p>{user}</p>
      <p>{text}</p>
      <p>{rating}</p>
    </li>
  );
};
