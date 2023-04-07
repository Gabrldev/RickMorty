import { useState } from "react";
import style from "../styles/nav.module.css";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
export default function SearchBar({ onSearch, getRandon }) {
  const [id, setId] = useState("");

  const handleChange = (e) => {
    setId(e.target.value);
  };

  const getRandomNumber = (() => {
    const numbers = Array.from({ length: 826 }, (_, i) => i + 1);
    return () =>
      numbers.splice(Math.floor(Math.random() * numbers.length), 1)[0];
  })();

  const hiddenHeader = () => {
    if (window.location.pathname === "/") {
      return style.hidden;
    }
  };

  return (
    <div className={style.search}>
      <header className={style.imgBox}>
        <Link to="/">
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
        <button
          onClick={() => getRandon(getRandomNumber())}
          className={style.getrandom}
        >
          Get Random
        </button>
      </div>
    </div>
  );
}
