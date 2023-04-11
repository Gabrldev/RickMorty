import React from "react";
import { useSelector } from "react-redux";
import Card from "../Cards/Card";
import style from './style.module.css'

const MyFavorite = () => {
  const favorite = useSelector((state) => state.myFavorite);
  return(
    <div className={style.container}>
      {favorite.map((character) => {
        return(
          <Card 
          key={character.id}
          name={character.name}
          status={character.status}
          image={character.image}
          id={character.id}
          />
        )
      })}
    </div>

  )
};

export default MyFavorite;
