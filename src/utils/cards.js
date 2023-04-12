import { useMemo } from "react";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite, removeCharacter } from "../redux/actions";
import style from '../components/styles/cards.module.css';
const useCards = () => {
    const dispatch = useDispatch();
    const myFavorite = useSelector((state) => state.myFavorite);
  
    const cardStatus =
      status === "Alive"
        ? style.alive
        : status === "Dead"
        ? style.dead
        : style.unknown;
  
    const isFavorite = useMemo(() => {
      return myFavorite.find((char) => char.id === id);
    }, [myFavorite, id]);
  
    const handleFavorites = () => {
      if (isFavorite) {
        dispatch(removeFavorite(id));
        toast.success("Personaje removido de favoritos");
      } else {
        dispatch(addFavorite({ name, status, image, id, gender }));
        toast.success("Personaje añadido a favoritos");
      }
    };
  
    const handleRemoveCharacter = () => {
      dispatch(removeCharacter(id));
      toast.success("Personaje eliminado con exito!");
    };

    return {cardStatus, isFavorite, handleFavorites, handleRemoveCharacter}
}
export default useCards;