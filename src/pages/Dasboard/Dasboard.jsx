import Cards from "../../components/Cards/Cards.jsx";
import style from "./dasboard.module.css";
import toast, { Toaster } from "react-hot-toast";

function Dashboard({characters}) {

  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== id));
    const notify = () => toast.success("Personaje eliminado con exito!");
    notify();
  };


  return (
    <div className={style.container}>
      <Toaster />
      <Cards characters={characters} onClose={onClose} />
    </div>
  );
}

export default Dashboard;
