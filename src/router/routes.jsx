import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dasboard/Dasboard.jsx";
import Home from "../pages/Home/Home.jsx";
import Erro404 from "../components/Errors/Erro404.jsx";
import Detail from "../components/Detail/Detail.jsx";
import SearchBar from "../components/SearchBar/SearchBar.jsx";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Erro404 />} />
        <Route path="/details/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
