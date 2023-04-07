import { useState } from "react";
import style from "../styles/nav.module.css";
export default function SearchBar({ onSearch }) {
  const [id, setId] = useState("");

  const handleChange = (e) => {
    setId(e.target.value);
  };

  return (
    <div className={style.form}>
      <input onChange={handleChange} placeholder="Ingresa el id a buscar" />
      <button
        className={style.button}
        onClick={() => {
          onSearch(id);
        }}
      >
        +
      </button>
    </div>
  );
}
