import styles from "../Header/Header.module.css";
import { ToggleTheme } from "../ToggleTheme/ToggleTheme";
import { Profile } from "../Profile/Profile";
import cn from "classnames";
import { CartContainer } from "../Cart/CartContainer";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={cn("container", styles.headerContainer)}>
        <ToggleTheme />
        <Profile />
        <CartContainer/>
      </div>
    </header>
  );
};
