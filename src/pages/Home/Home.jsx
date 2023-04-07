import style from "./home.module.css";
import logo from "../../assets/logo.png";
import Fondo from "../../assets/fondo2.png";
import LinkBtn from "../../components/LinkBtn/LinkBtn.jsx";
function Home() {
  return (
    <div className={style.container}>
      <header className={style.header}>
        <img src={logo} alt="" className={style.logo} />
      </header>
      <main className={style.main}>
        <section className={style.section}>
          <div className={style.izquierda}>
            <div className={style.ImgBox}>
              <img src={Fondo} alt="" className={style.img} />
            </div>
          </div>
          <div className={style.derecha}>
            <h1 className={style.title}>Rick And Morty</h1>
            <div className={style.text}>
              <p>
                orem ipsum dolor sit amet, consectetur adipisicing elit. Sit,
                praesentium quia a laboriosam excepturi tempore consectetur
                quaerat minus at nam, quas aperiam facere quisquam non quasi
                consequuntur autem veritatis eligendi.
              </p>
            </div>

            <LinkBtn nama="Ingresar" to="/dashboard" />
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
