import Cards from "../../components/Cards/Cards.jsx";
import style from "./dasboard.module.css";
import toast, { Toaster } from "react-hot-toast";


function Dashboard({characters, onClose}) {

  return (
    <div className={style.container}>
      <Toaster />
      <Cards characters={characters} onClose={onClose}  />
    </div>
  );
}

export default Dashboard;
