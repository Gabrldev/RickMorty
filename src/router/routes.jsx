import { BrowserRouter, Routes, Route} from "react-router-dom";
import Dashboard from "../pages/Dasboard/Dasboard";
import Erro404 from "../components/Errors/Erro404.jsx";
import Detail from "../components/Detail/Detail.jsx";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import ProtectedRoute from "./ProtectedRoute";
import { Provider } from "react-redux";
import store from "../redux/store";
import MyFavorite from "../components/MyFavorite/MyFavorite";
import Register from "../components/Login/Register";
import Login from "../components/Login/Login";


const Router = () => {
  const URL_BASE = "https://be-a-rym.up.railway.app/api/character";
  const API_KEY = "01c65889effb.1b54c5795354ee1b48e5";
  const [characters, setCharacters] = useState([]);

  function onSearch(id) {
    if (id === "") {
      const notify = () => toast.error("¡Debes de ingresar un ID!");
      notify();
    } else if (id > 826 || id < 1) {
      const notify = () => toast.error("¡El ID debe estar entre 1 y 826!");
      notify();
    }

    if (characters.find((char) => char.id === id)) {
      const notify = () => toast.error("¡Ya existe este personaje!");
      notify();
    } else {
      axios(`${URL_BASE}/${id}?key=${API_KEY}`).then(({ data }) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
          const notify = () => toast.success("Personaje agregado con exito!");
          notify();
        }
      });
    }
  }
  function getRandon(id) {
    axios(`${URL_BASE}/${id}?key=${API_KEY}`).then(({ data }) => {
      if (characters.find((char) => char.id === data.id)) {
        const notify = () => toast.error("¡Ya existe este personaje!");
        notify();
        getRandon(id - 1);
      } else {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
          const notify = () => toast.success("Personaje agregado con exito!");
          notify();
        }
      }
    });
  }

  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== id));
    const notify = () => toast.success("Personaje eliminado con exito!");
    notify();
  };
  const user = localStorage.getItem('sb-uzpmvpjlwmktjtipuxxf-auth-token')
  return (
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectedRoute onSearch={onSearch} getRandon={getRandon} />}>
          <Route path="/details/:id" element={<Detail />} />
          <Route path="/dashboard" element={<Dashboard characters={characters} onClose={onClose}/>}/>
          <Route path="/favorite" element={<MyFavorite/>} />
        </Route>
        <Route path="*" element={<Erro404 />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Login />}/>
      </Routes>
    </BrowserRouter>
    </Provider>
  );
};
export default Router;
