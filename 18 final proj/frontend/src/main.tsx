import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./css/index.css";
import Route from "./routes";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Route />
  </StrictMode>
);
