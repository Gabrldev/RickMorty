import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import style from "./detail.module.css";
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
    <>
      <div className={style.nameBack}>
        <span className={style.span}>{character.name}</span>
      </div>
      <div className={style.container}>
        {character.name ? (
          <section className={style.section}>
            <div>
              <img
                src={character.image}
                alt={character.name}
                className={style.image}
              />
            </div>
            <div className={style.infoCard}>
              <h2 style={{ color: "#00000091" }}>Info</h2>
              <div className={style.boxAl}>
                <h1 className={style.nameP}>
                  Name: <span>{character.name}</span>{" "}
                </h1>
              </div>
              <div className={style.boxAl2}>
                <h1 className={style.nameP}>
                  Origin: <span>{character.origin.name}</span>{" "}
                </h1>
              </div>
              <div className={style.boxAl}>
                <h1 className={style.nameP}>
                  Gender: <span>{character.gender}</span>{" "}
                </h1>
              </div>
              <div className={style.boxAl2}>
                <h1 className={style.nameP}>
                  Status: <span>{character.status}</span>{" "}
                </h1>
              </div>
            </div>
          </section>
        ) : (
          <Loader />
        )}
      </div>
    </>
  );
}
