import { useDispatch, useSelector } from "react-redux";
import { getCharacters } from "../redux/actions";
import { toast } from "react-hot-toast";
export const useRandom =()=>{
    const getRandomNumber = (() => {
      const numbers = Array.from({ length: 826 }, (_, i) => i + 1);
      return () =>
        numbers.splice(Math.floor(Math.random() * numbers.length), 1)[0];
    })();
  
    const character = useSelector((state) => state.characters);
    const dispatch = useDispatch();
  
    const handleClick = () => {
      const id = getRandomNumber().toString();
  
      if (character.find((char) => char.id === id)) {
        const notify = () => toast.error("¡Ya existe este personaje!");
        notify();
      } else{
        dispatch(getCharacters(id));
        const notify = () => toast.success("Personaje agregado con exito!");
        notify();
      }
    };
    return handleClick
  }