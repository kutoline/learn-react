import { Button } from "../../common/components/Button/Button";
import { ThemeContext } from "../ThemeContext/ThemeContext";
import { useContext } from "react";

export const ToggleTheme = () => {
  const { theme, updateTheme } = useContext(ThemeContext);

  return (
    <Button buttonClassName={""} handleButtonClick={updateTheme}>
      {theme === "dark" ? "Светлая тема" : "Темная тема"}
    </Button>
  );
};
