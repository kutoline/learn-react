import { ProgressBar } from "../../common/components/ProgressBar/ProgressBar";
import { Header } from "../Header/Header";
import styles from "./Layout.module.css";
import cn from "classnames";

export const Layout = ({ children }) => {
  return (
    <main>
      <ProgressBar />
      <Header />
      <div className={cn("container", styles.layoutContent)}>{children}</div>
      <footer />
    </main>
  );
};
