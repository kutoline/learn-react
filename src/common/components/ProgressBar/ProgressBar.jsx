import { useProgressBar } from "./use-progress-bar";

export const ProgressBar = () => {
  const { y } = useProgressBar();

  return (
    <div
      style={{
        position: "fixed",
        height: "10px",
        width: `${y}%`,
        backgroundColor: "red",
      }}
    >
      ProgressBar
    </div>
  );
};
