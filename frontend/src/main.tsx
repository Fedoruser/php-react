import "./shared/styles/normalize.scss";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Router } from "./app/Router";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router />
  </StrictMode>,
);
