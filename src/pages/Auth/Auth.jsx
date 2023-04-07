
import style from "../../components/styles/login.module.css";
import logo from "../../assets/logo.png";
import Register from '../../components/Login-Register/Register'

export default function Auth() {
  return (
    <>
      <header className={style.header}>
        <img src={logo} alt="logo rick and morty" width="160px" />
      </header>
      <div className={style.orden}>
      <Register />
      </div>

    </>
  );
}
