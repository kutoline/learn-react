import styles from "./Button.module.css";
import cn from "classnames";

export const Button = ({ handleButtonClick, active, children }) => {
  const buttonClasses = cn(styles.button, {
    [styles.buttonActive]: active,
  });

  return (
    <button className={buttonClasses} onClick={handleButtonClick}>
      {children}
    </button>
  );
};
