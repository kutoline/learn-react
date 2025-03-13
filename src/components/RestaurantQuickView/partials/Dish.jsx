import { Counter } from "../../../common/components/Counter/Counter";

export const Dish = ({ id, name, price, ingredients }) => {
  return (
    <>
      <p>
        {name} - {price}$
      </p>
      <span>{ingredients.join(", ")}</span>
      <Counter key={id} max={5} />
    </>
  );
};
