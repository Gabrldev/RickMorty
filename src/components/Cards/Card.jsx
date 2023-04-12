import style from "../styles/card.module.css";
import { Link, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { addFavorite, removeFavorite, removeCharacter } from "../../redux/actions";
import { useMemo } from "react";
import { toast } from "react-hot-toast";

function Card({
  name,
  status,
  image,
  id,
  gender,
  addFavorite,
  removeFavorite,
  myFavorite,
  removeCharacter,
}) {
  const cardStatus = status === "Alive" ? style.alive : status === "Dead" ? style.dead : style.unknown;

  const isFavorite = useMemo(() => {
    return myFavorite.find((char) => char.id === id);
  }, [myFavorite, id]);

  const handleFavorites = () => {
    if (isFavorite) {
      removeFavorite(id);
      toast.success("Personaje removido de favoritos");
    } else {
      addFavorite({ name, status, image, id,gender });
      toast.success("Personaje añadido a favoritos");
    }
  };

  const handleRemoveCharacter = () => {
    removeCharacter(id);
    toast.success("Personaje eliminado con exito!");
  };

  const location = useLocation();

  return (
    <div className={style.container}>
      {location.pathname === "/dashboard" ? (
        <button className={style.btn} onClick={() => handleRemoveCharacter()}>
          X
        </button>
      ) : null}
      <strong className={style.name}>{name}</strong>
      <div className={style.card}>
        <img src={image} alt={name} className={style.img} />
        <h2 className={cardStatus}>{status}</h2>
      </div>
      <div className={style.FavAnM}>
        <Link to={`/details/${id}`}>
          <button className={style.moreIn}>More Info</button>
        </Link>
        {isFavorite ? (
          <button className={style.fav} onClick={() => handleFavorites()}>
            Remove ❤️
          </button>
        ) : (
          <button className={style.favR} onClick={() => handleFavorites()}>
            Add 🤍
          </button>
        )}
      </div>
    </div>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    addFavorite: (character) => {
      dispatch(addFavorite(character));
    },
    removeFavorite: (id) => {
      dispatch(removeFavorite(id));
    },
    removeCharacter: (id) => {
      dispatch(removeCharacter(id));
    }
  };
};
const napStateToProps = (state) => {
  return {
    myFavorite: state.myFavorite,
    characters : state.characters
  };
};
export default connect(napStateToProps, mapDispatchToProps)(Card);
