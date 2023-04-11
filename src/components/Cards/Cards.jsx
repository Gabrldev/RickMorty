import Card from "./Card";
import style from "../styles/cards.module.css";
import { useSelector } from "react-redux";

export default function Cards({ onClose }) {
  const characters = useSelector((state) => state.characters);
  return (

    <div className={style.container}>
      <select className={style.filter}>
        <option value="">Select Option</option>
        <option value="Alive">Alive</option>
        <option value="Dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>

      {characters.map((character) => {
        return (
          <Card
            key={character.id}
            id={character.id}
            name={character.name}
            status={character.status}
            species={character.species}
            image={character.image}
            onClose={onClose}
          />
        );
      })}
    </div>
  );
}
