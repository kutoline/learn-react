import React, { useContext } from "react";
import { AufContext } from "../AufContext/AufContext";
import { Button } from "../../common/components/Button/Button";
import styles from "./Profile.module.css";

export const Profile = () => {
  const { user, setUser } = useContext(AufContext);

  return (
    <div className={styles.profile}>
      {user && user}
      {user ? (
        <Button handleButtonClick={() => setUser(null)}>Выйти</Button>
      ) : (
        <Button handleButtonClick={() => setUser("Женя")}>Войти</Button>
      )}
    </div>
  );
};
