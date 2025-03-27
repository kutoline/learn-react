import { useProgressBar } from "./use-progress-bar";

export const ProgressBar = () => {
  const [scrollWidth] = useProgressBar();

  return (
    <div
      style={{
        position: "fixed",
        height: "10px",
        width: `${scrollWidth}%`,
        backgroundColor: "red",
      }}
    ></div>
  );
};
