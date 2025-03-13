export const RestaurantReviews = ({ reviews }) => {
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
    </div>
  );
};
