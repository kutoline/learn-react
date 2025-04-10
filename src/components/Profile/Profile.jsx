import React, { useContext } from "react";
import { AuthContext } from "../AuthContext/AuthContext";
import { Button } from "../../common/components/Button/Button";
import styles from "./Profile.module.css";

export const Profile = () => {
  const { user, login, logout } = useContext(AuthContext);

  return (
    <div className={styles.profile}>
      {user && user}
      {user ? (
        <Button handleButtonClick={logout}>Выйти</Button>
      ) : (
        <Button handleButtonClick={login}>Войти</Button>
      )}
    </div>
  );
};
