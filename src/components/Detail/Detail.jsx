import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
export default function Detail() {
  
  const { id } = useParams();

  const URL_BASE = "https://be-a-rym.up.railway.app/api/character";
  const API_KEY = "01c65889effb.1b54c5795354ee1b48e5";

  const [character, setCharacter] = useState([]);

  useEffect(() => {
    axios(`${URL_BASE}/${id}?key=${API_KEY}`).then((res) =>
      setCharacter(res.data)
    );
  }, [id]);

  return (
    <div>
      {character.name ? (
        <section>
          <h1>{character.name}</h1>
          <img src={character.image} alt={character.name} />
          <p>{character.status}</p>
          <p>{character.species}</p>
        </section>
      ) : (
        <Loader />
      )}
    </div>
  );
}
