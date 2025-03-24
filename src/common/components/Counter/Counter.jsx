export const Counter = ({
  count,
  minDisabled,
  maxDisabled,
  handleIncrease = null,
  handleDecrease = null,
}) => {
  return (
    <div className="">
      <button disabled={minDisabled} onClick={() => handleDecrease?.(count)}>
        -
      </button>
      <span>{count}</span>
      <button disabled={maxDisabled} onClick={() => handleIncrease?.(count)}>
        +
      </button>
    </div>
  );
};
