import Card from './Card'
import style from '../styles/cards.module.css'
import { useSelector } from 'react-redux'

export default function Cards ({ onClose }) {
  const characters = useSelector((state) => state.characters)
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
            gender={character.gender}
          />
        )
      })}
    </div>
  )
}
