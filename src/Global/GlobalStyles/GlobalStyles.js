import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
 ${reset};

*{
  box-sizing: border-box;
}

body{
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif, "Cookie", cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}

ul{
  margin: 0;
  padding-left: 0;
  list-style: none;
}

li{
  list-style: none;
}

button{
  padding: 0;
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
}

a{
  text-decoration: none;
  outline: none;
  color: #000000;
}

textarea{
  border: none;
  resize: none;
  outline: none;
}

code{
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}

pre{
  font: 1em sans-serif;
}

`;

export default GlobalStyles;
