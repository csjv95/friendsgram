import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Theme } from "./style/Theme";
import { ThemeProvider } from "styled-components";
import { createStore } from "redux";
import { Provider } from "react-redux";

import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./redux/modules/rootReducer";

const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider theme={Theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
