import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.tsx";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    lightBackgroundColor: "grey",
  },
  fontSize: {
    normal: "16px",
    large: "20px",
  },
};
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>
);
