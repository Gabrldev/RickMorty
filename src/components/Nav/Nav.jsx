import SearchBar from "../SearchBar/SearchBar";
import { NavLink } from "react-router-dom";
import style from "../styles/nav.module.css";
import Logo from "../../assets/logo.png";
import { useLocation } from "react-router-dom";
import { supabase } from "../../client/client";
import { FiLogOut, FiMenu } from "react-icons/fi";
import { GoChevronLeft } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import { BiX } from "react-icons/bi";
import { useState } from "react";
import { BsFillBookmarkCheckFill } from "react-icons/bs";
import GetRandom from "../GetRandom/GetRandom";
const Nav = () => {
  const navigate = useNavigate();

  async function logout() {
    await supabase.auth.signOut();
    sessionStorage.removeItem("token");
    navigate("/");
  }
  const [showMenu, setShowMenu] = useState(false);

  const menuClose = () => {
    setShowMenu(!showMenu);
  };
  const ruta = useLocation();
  return (
    <>
      <div className={showMenu ? style.menuMb : style.menuActive}>
        <BiX className={style.iconClose} onClick={menuClose} />
        <ul>
          <li>
            <NavLink to="/dashboard" className={style.back} onClick={menuClose}>
              <GoChevronLeft />
              Back
            </NavLink>
          </li>
          <li>
            <NavLink to="/favorite" onClick={menuClose} className={style.back}>
              My Favorite
            </NavLink>
          </li>

          <li>
            <button onClick={logout} className={style.back}>
              <FiLogOut />
              Logout
            </button>
          </li>
        </ul>
      </div>

      <header className={style.search}>
        <FiMenu className={style.iconMenu} onClick={menuClose} />
        <div className={style.boxHeader}>
          <img
            src={Logo}
            alt=""
            style={{ width: "100px", objectFit: "contain" }}
          />
          {ruta.pathname === "/dashboard" && <SearchBar  />}
          {ruta.pathname === "/dashboard" && <GetRandom />}
        </div>

        <div className={style.boxMv}>
          {ruta.pathname === "/dashboard" && (
            <NavLink to="/favorite" className={style.myFav}>
              My Favorite
              <BsFillBookmarkCheckFill />
            </NavLink>
          )}
        </div>
        <div className={style.aside}>
          {ruta.pathname === "/dashboard"
            ? null
            : <NavLink to="/dashboard" className={style.back}>
                <GoChevronLeft />
                Back
              </NavLink>}
          <FiLogOut
            onClick={logout}
            style={{ color: "#ffffff80", fontSize: "20px", cursor: "pointer" }}
          />
        </div>
      </header>
    </>
  );
};

export default Nav;
