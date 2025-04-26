export const Product = ({ name, amount, price }) => {
  return (
    <li>
      <span>{name}</span>
      <span>{amount}</span>
      <span>{price}</span>
    </li>
  );
};
