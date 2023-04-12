import React from "react";
import { useSelector } from "react-redux";
import Card from "../Cards/Card";
import style from './style.module.css'
import { orderCards, filterCards } from "../../redux/actions";
import { useDispatch } from "react-redux";

const MyFavorite = () => {
  const dispatch = useDispatch();
  const favorite = useSelector((state) => state.myFavorite);

  const handledispatch = (e) => {
    if(e.target.name === "order"){
      dispatch(orderCards(e.target.value))
    }else if(e.target.name === "filter"){
      dispatch(filterCards(e.target.value))
    }
  }
  return(
    
    <div className={style.container}>
      <div>
          <select name="order"  onClick={handledispatch}>
            <option value="Ascendente" >Ascendente</option>
            <option value="Descendente">Descendente</option>
          </select>
          <select name="filter"  onClick={handledispatch}>
            <option value="Male">Male</option>
            <option value="Female">Famele</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">unknown</option>
            </select>

      </div>
      {favorite.map((character) => {
        return(
          <Card 
          key={character.id}
          name={character.name}
          status={character.status}
          image={character.image}
          id={character.id}
          gender={character.gender}
          />
        )
      })}
    </div>

  )
};

export default MyFavorite;
