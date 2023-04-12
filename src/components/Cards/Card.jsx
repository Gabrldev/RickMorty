import style from '../styles/card.module.css'
import { Link, useLocation } from 'react-router-dom'
import { useMemo } from 'react'
import { toast } from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { addFavorite, removeFavorite, removeCharacter } from '../../redux/actions'

function Card ({ name, status, image, id, gender }) {
  const dispatch = useDispatch()
  const myFavorite = useSelector((state) => state.myFavorite)

  const cardStatus =
    status === 'Alive'
      ? style.alive
      : status === 'Dead'
        ? style.dead
        : style.unknown

  const isFavorite = useMemo(() => {
    return myFavorite.find((char) => char.id === id)
  }, [myFavorite, id])

  const handleFavorites = () => {
    if (isFavorite) {
      dispatch(removeFavorite(id))
      toast.error('Personaje removido de favoritos')
    } else {
      dispatch(addFavorite({ name, status, image, id, gender }))
      toast.success('Personaje añadido a favoritos')
    }
  }

  const handleRemoveCharacter = () => {
    dispatch(removeCharacter(id))
    toast.success('Personaje eliminado con exito!')
  }

  const location = useLocation()

  return (
    <div className={style.container}>
      <span className={style.id}>#{id}</span>
      {location.pathname === '/dashboard'
        ? (
          <button className={style.btn} onClick={handleRemoveCharacter}>
            X
          </button>
          )
        : null}
      <strong className={style.name}>{name}</strong>
      <div className={style.card}>
        <img src={image} alt={name} className={style.img} />
        <h2 className={cardStatus}>{status}</h2>
      </div>
      <div className={style.FavAnM}>
        <Link to={`/details/${id}`}>
          <button className={style.moreIn}>More Info</button>
        </Link>
        {isFavorite
          ? (
            <button className={style.fav} onClick={handleFavorites}>
              Remove ❤️
            </button>
            )
          : (
            <button className={style.favR} onClick={handleFavorites}>
              Add 🤍
            </button>
            )}
      </div>
    </div>
  )
}
export default Card
