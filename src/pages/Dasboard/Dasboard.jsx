import Cards from "../../components/Cards.jsx";
import Nav from "../../components/Nav.jsx";
import axios from "axios";
import { useState } from "react";
import style from "./dasboard.module.css";
import toast, { Toaster } from "react-hot-toast";

function Dashboard() {
  const URL_BASE = "https://be-a-rym.up.railway.app/api/character";
  const API_KEY = "01c65889effb.1b54c5795354ee1b48e5";
  function onSearch(id) {
    if (id > 826 || id < 1) {
      const notify = () => toast.error("¡No hay personajes con este ID!");
      notify();
    }
    axios(`${URL_BASE}/${id}?key=${API_KEY}`).then(({ data }) => {
      if (characters.find((char) => char.id === data.id)) {
        const notify = () => toast.error("¡Ya existe este personaje!");
        notify();
      } else {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
          const notify = () => toast.success("Personaje agregado con exito!");
          notify();
        }
      }
    });
  }
  function getRandon(id) {
    axios(`${URL_BASE}/${id}?key=${API_KEY}`).then(({ data }) => {
      if (characters.find((char) => char.id === data.id)) {
        getRandon(Math.floor(Math.random() * 826));
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

  const [characters, setCharacters] = useState([]);

  return (
    <div className={style.container}>
      <Nav onSearch={onSearch} getRandon={getRandon} />
      <Toaster />
      <Cards characters={characters} onClose={onClose} />
    </div>
  );
}

export default Dashboard;
