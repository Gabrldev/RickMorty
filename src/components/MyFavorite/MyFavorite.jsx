import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Card from '../Cards/Card'
import style from './style.module.css'
import { orderCards, filterCards, cleanFilter, reset } from '../../redux/actions'

const MyFavorite = () => {
  useEffect(() => {
    dispatch(cleanFilter())
  }, [])

  const dispatch = useDispatch()
  const favorite = useSelector((state) => state.myFavorite)

  const handleOrder = (e) => {
    dispatch(orderCards(e.target.value))
  }
  const handleFilter = (e) => {
    if (e.target.value === 'all') {
      dispatch(reset())
    } else {
      dispatch(filterCards(e.target.value))
    }
  }
  return (
    <div className={style.container}>
      <div className={style.filter}>
        <select name='order' onChange={handleOrder} className={style.select}>
          <option selected disabled>Select option <i>↓</i></option>
          <option value='Ascendente'>Ascendente</option>
          <option value='Descendente'>Descendente</option>
          -
        </select>
        <select name='filter' onChange={handleFilter} className={style.select}>
          <option selected disabled>Select option <i className={style.icon}>↓</i></option>
          <option value='all'>All</option>
          <option value='Male'>Male</option>
          <option value='Female'>Famele</option>
          <option value='Genderless'>Genderless</option>
          <option value='unknown'>unknown</option>
        </select>
      </div>
      {favorite.length === 0 && (
        <h1>no hay personajes con este filtro</h1>
      )}
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
        )
      })}
    </div>
  )
}

export default MyFavorite
