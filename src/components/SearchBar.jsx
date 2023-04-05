import { useState } from "react";
import style from "./styles/nav.module.css";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

export default function SearchBar({ onSearch, getRandon }) {
  const [id, setId] = useState("");

  const handleChange = (e) => {
    setId(e.target.value);
  };

  const idRandom = Math.floor(Math.random() * (671 - 1) + 1);


  return (
    <div className={style.search}>
      <header className={style.imgBox}>
        <Link to='/'>
          <img src={Logo} alt="" />
        </Link>
      </header>
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
      <div>
        
      </div>
    </div>
  );
}
