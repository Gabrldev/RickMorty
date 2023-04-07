import SearchBar from "../SearchBar/SearchBar";
import { NavLink} from "react-router-dom";
import style from "../styles/nav.module.css";
import Logo from "../../assets/logo.png";
import { useLocation } from "react-router-dom";
const Nav = ({ onSearch, getRandon }) => {
  const getRandomNumber = (() => {
    const numbers = Array.from({ length: 826 }, (_, i) => i + 1);
    return () =>
      numbers.splice(Math.floor(Math.random() * numbers.length), 1)[0];
  })();

  const ruta = useLocation();
  return (
    <header className={style.search}>
      <img src={Logo} alt="" width="100px" />
      {ruta.pathname === "/dashboard" ? (
        <SearchBar onSearch={onSearch} getRandon={getRandon} />
      ) : null
      }

      {ruta.pathname === "/dashboard" ? (
        <button onClick={() => getRandon(getRandomNumber())} className={style.getrandom}>Get Random</button>
      ) : (
        <NavLink to="/dashboard" className={style.back}> Back  </NavLink> 
      )}
    </header>
  );
};

export default Nav;
