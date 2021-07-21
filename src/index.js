import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Theme } from "./style/Theme";
import { ThemeProvider } from "styled-components";

ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider theme={Theme}>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
