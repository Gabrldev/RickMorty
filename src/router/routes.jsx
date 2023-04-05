import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dasboard/Dasboard.jsx";
import Home from "../pages/Home/Home.jsx";
import Erro404 from "../components/Erro404.jsx";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Erro404 />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
