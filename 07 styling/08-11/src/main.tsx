import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.tsx";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: "red",
    secondary: "gray",
  },
  fontSize: {
    normal: "16px",
    margin: "20px",
  },
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>
);
