import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box; 
}

html {
  background-color: ${(props) => props.theme.bg}; 
}

body {
  font-family: 'Inter', sans-serif;
  color: ${(props) => props.theme.text};
}

button {
  cursor: pointer;
}
`;
