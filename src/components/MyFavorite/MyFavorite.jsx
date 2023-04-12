import React from "react";
import { useSelector } from "react-redux";
import Card from "../Cards/Card";
import style from "./style.module.css";
import { orderCards, filterCards,cleanFilter,reset } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const MyFavorite = () => {

  useEffect(()=>{
    dispatch(cleanFilter())
  },[])

  const dispatch = useDispatch();
  const favorite = useSelector((state) => state.myFavorite);

  const handleOrder = (e) => {
    dispatch(orderCards(e.target.value));
  }
  const handleFilter= (e) => {
    if(e.target.value==='all'){
      dispatch(reset())
    }else{
      dispatch(filterCards(e.target.value));
    }
  }
  return (
    <div className={style.container}>
      <div>
        <select name="order" onChange={handleOrder} >
          <option selected disabled>Select option</option>
          <option value="Ascendente">Ascendente</option>
          <option value="Descendente">Descendente</option>
        </select>
        <select name="filter" onChange={handleFilter}>
          <option selected disabled>Select option</option>
          <option value='all'>All</option>
          <option value="Male">Male</option>
          <option value="Female">Famele</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">unknown</option>
        </select>
      </div>
      {favorite.map((character) => {
        return (
          <Card
            key={character.id}
            name={character.name}
            status={character.status}
            image={character.image}
            id={character.id}
            gender={character.gender}
          />
        );
      })}
    </div>
  );
};

export default MyFavorite;
