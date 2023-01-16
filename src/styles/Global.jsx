import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: inherit; 
}

html {
  font-size: 62.5%;
  background-color: ${(props) => props.theme.bg}; 
}

body {
  box-sizing: border-box;
  font-family: 'Inter', sans-serif;
  color: ${(props) => props.theme.text};
}

button {
  cursor: pointer;
}
`;
