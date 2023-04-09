import style from "../styles/card.module.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addFavorite, removeFavorite } from "../../redux/actions";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Card({
  name,
  status,
  image,
  onClose,
  id,
  addFavorite,
  removeFavorite,
  myFavorite,
}) {
  const aliveOrDead = () => {
    if (status === "Alive") {
      return style.alive;
    } else if (status === "Dead") {
      return style.dead;
    } else {
      return style.unknown;
    }
  };

  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removeFavorite(id);
    } else {
      setIsFav(true);
      addFavorite({ name, status, image, id });
    }
  };

  useEffect(() => {
    if (myFavorite.find((char) => char.id === id)) {
      setIsFav(true);
    } else {
      setIsFav(false);
    }
  }, [myFavorite]);

  const ruta = useLocation();
  return (
    <div className={style.container}>
      {ruta.pathname === "/dashboard" ? (
        <button className={style.btn} onClick={()=>onClose(id)}>
          X
        </button>
      ) : null}
      <strong className={style.name}>{name}</strong>
      <div className={style.card}>
        <img src={image} alt={name} className={style.img} />
        <h2 className={aliveOrDead()}>{status}</h2>
      </div>
      <Link to={`/details/${id}`}>
        <button className={style.moreIn}>More Info</button>
      </Link>
      {isFav ? (
        <button className={style.fav} onClick={handleFavorite}>
          ❤️
        </button>
      ) : (
        <button className={style.fav} onClick={handleFavorite}>
          🤍
        </button>
      )}
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
  };
};
const napStateToProps = (state) => {
  return {
    myFavorite: state.myFavorite,
  };
};
export default connect(napStateToProps, mapDispatchToProps)(Card);
