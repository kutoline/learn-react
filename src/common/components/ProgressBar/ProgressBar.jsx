import { useProgressBar } from "./use-progress-bar";
import styles from "./Progressbar.module.css"

export const ProgressBar = () => {
  const scrollWidth = useProgressBar();

  return <div className={styles.progressBar} style={{ width: `${scrollWidth}%` }} />;
};
