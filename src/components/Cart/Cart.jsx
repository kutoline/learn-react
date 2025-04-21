import { Product } from "./partials/Product";

export const Cart = ({ cart }) => {
  const { products } = cart;
  return (
    <div>
      <ul>
        {products.map(({ name, price, amount, id }) => (
          <Product key={id} name={name} price={price} amount={amount} />
        ))}
      </ul>
    </div>
  );
};
