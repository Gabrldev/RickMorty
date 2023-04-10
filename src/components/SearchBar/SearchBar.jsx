import { useState } from "react";
import style from "../styles/nav.module.css";
import { useSelector } from "react-redux"
 function SearchBar({ onSearch }) {

  const [id, setId] = useState("");
  const character = useSelector((state) => state.characters);

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
export default SearchBar;