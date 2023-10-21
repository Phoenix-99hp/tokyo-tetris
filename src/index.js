import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import Theme from "./theme/theme";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./theme/globalStyle";
import "./theme/globalFonts.css";

// ReactDOM.render(
//   <ThemeProvider theme={Theme}>
//     <GlobalStyle />
//     <App />
//   </ThemeProvider>,
//   document.getElementById("root")
// );

createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={Theme}>
    <GlobalStyle />
    <App />
  </ThemeProvider>
);
