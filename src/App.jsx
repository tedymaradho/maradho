import { ThemeProvider } from "styled-components";
import { theme } from "./styles/Theme";
import { GlobalStyle } from "./styles/Global";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
