import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "bootstrap/dist/css/bootstrap.css";
import "./styles/_styles.scss";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
