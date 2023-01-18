import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PortfolioDetail from "./pages/PortfolioDetail";
import NotFound from "./components/NotFound";
import "./sass/main.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/portfolio" element={<PortfolioDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
