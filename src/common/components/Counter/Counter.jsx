export const Counter = ({
  count,
  minDisabled,
  maxDisabled,
  handleIncrease = null,
  handleDecrease = null,
}) => {
  return (
    <div className="">
      <button
        disabled={minDisabled}
        onClick={handleIncrease && ((e) => handleDecrease(e, count))}
      >
        -
      </button>
      <span>{count}</span>
      <button
        disabled={maxDisabled}
        onClick={handleDecrease && ((e) => handleIncrease(e, count))}
      >
        +
      </button>
    </div>
  );
};
