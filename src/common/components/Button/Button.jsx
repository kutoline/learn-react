import styles from "./Button.module.css";
import cn from "classnames";

export const Button = ({
  text,
  handleButtonClick,
  buttonClassName = "",
  children,
}) => {
  return (
    <button
      className={cn(styles.button, buttonClassName)}
      onClick={handleButtonClick}
    >
      {children}
    </button>
  );
};
