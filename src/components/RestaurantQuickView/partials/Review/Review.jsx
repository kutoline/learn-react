import React from "react";

export const Review = ({ id, user, text, rating }) => {
  return (
    <li key={id}>
      <p>{user}</p>
      <p>{text}</p>
      <p>{rating}</p>
    </li>
  );
};
