import Cards from "../../components/Cards.jsx";
import Nav from "../../components/Nav.jsx";
import axios from "axios";
import { useState } from "react";
import style from "./dasboard.module.css";
import toast, { Toaster } from "react-hot-toast";

function Dashboard() {
  function onSearch(id) {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          if (!characters.find((char) => char.id === data.id)) {
            setCharacters((oldChars) => [...oldChars, data]);
            const notify = () => toast.success("Personaje agregado con exito!");
            notify();
          } else {
            const notify = () => toast.error("¡Ya existe este personaje!");
            notify();
          }
        } else {
          alert("¡No hay personajes con este ID!");
        }
      }
    );
  }
  function getRandon(id){
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          if (!characters.find((char) => char.id === data.id)) {
            setCharacters((oldChars) => [...oldChars, data]);
            const notify = () => toast.success("Personaje agregado con exito!");
            notify();
          } else {
            const notify = () => toast.error("¡Ya existe este personaje!");
            notify();
          }
        } else {
          alert("¡No hay personajes con este ID!");
        }
      }
    );
  }
  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== id));
    const notify = () => toast.success("Personaje eliminado con exito!");
    notify();
  };

  const [characters, setCharacters] = useState([]);

  return (
    <div className={style.container}>
      <Nav onSearch={onSearch}  getRandon={getRandon}/>
      <Toaster />
      <Cards characters={characters} onClose={onClose} />
    </div>
  );
}

export default Dashboard;
