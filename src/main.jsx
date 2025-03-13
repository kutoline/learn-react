import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./common/styles/styles.css";
import { App } from "./components/App/App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
