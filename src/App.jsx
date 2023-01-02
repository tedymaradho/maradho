import { ThemeProvider } from "styled-components";
import { theme } from "./styles/Theme";
import { GlobalStyle } from "./styles/Global";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PortfolioDetail from "./pages/PortfolioDetail";
import NotFound from "./components/NotFound";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="portfolio" element={<PortfolioDetail />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
