import Card from "./Card";
import style from "../styles/cards.module.css";

export default function Cards({ characters, onClose }) {
  return (
    <div className={style.container}>

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
