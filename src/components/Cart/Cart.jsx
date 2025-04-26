import { ProductContainer } from "./partials/ProductContainer";

export const Cart = ({ dishIds }) => {
  return (
    <div>
      <ul>
        {dishIds.map((id) => {
          return <ProductContainer key={id} id={id} />;
        })}
      </ul>
    </div>
  );
};
