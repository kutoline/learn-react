import { useCallback, useState } from "react";

export const useCounter = (currentCount) => {
  const [count, setCount] = useState(currentCount);

  const setIncrement = useCallback(() => setCount((count) => count + 1), []);
  const setDecrement = useCallback(() => setCount((count) => count - 1), []);

  return {
    count,
    setDecrement,
    setIncrement,
  };
};
