import style from "../styles/nav.module.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCharacters } from "../../redux/actions";
import { toast } from "react-hot-toast";

function SearchBar() {

  const character = useSelector((state) => state.characters);
  const [id, setId] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setId(e.target.value);
  };

  const handleSubmit = () => {
    if (id === "") {
      const notify = () => toast.error("¡Debes de ingresar un ID!");
      return notify();
    } else if (id > 826 || id < 1) {
      const notify = () => toast.error("¡El ID debe estar entre 1 y 826!");
      return notify();
    } else if (character.find((char) => char.id === id)) {
      const notify = () => toast.error("¡Ya existe este personaje!");
      return notify();
    }

    dispatch(getCharacters(id));
    const notify = () => toast.success("Personaje agregado con exito!");
    notify();
    setId("");
  };

  return (
    <div className={style.form}>
      <input
        onChange={handleChange}
        value={id}
        placeholder="Ingresa el id a buscar"
      />
      <button className={style.button} onClick={handleSubmit}>
        +
      </button>
    </div>
  );
}

export default SearchBar;
