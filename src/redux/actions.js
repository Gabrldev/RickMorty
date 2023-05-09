import {
  ADD_FAVORITE,
  REMOVE_FAVORITE,
  DETAIL_CHARACTERS,
  CLEAN_DETAIL,
  GET_CHARACTERS,
  REMOVE_CHARACTER,
  FILTER,
  ORDER,
  CLEAN_FILTER,
  RESET
} from './types'

export const addFavorite = (character) => {
  return {
    type: ADD_FAVORITE,
    payload: character
  }
}
export const removeFavorite = (id) => {
  return {
    type: REMOVE_FAVORITE,
    payload: id
  }
}

export const detailCharacters = (id) => {
  return function (dispatch) {
    const URL_BASE = 'https://rickandmortyapi.com/api/character'
    fetch(`${URL_BASE}/${id}`)
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: DETAIL_CHARACTERS,
          payload: data
        })
      })
  }
}
export const cleanDetail = () => {
  return {
    type: CLEAN_DETAIL
  }
}

export const getCharacters = (id) => {
  return function (dispatch) {
    const URL_BASE = 'https://rickandmortyapi.com/api/character'
    fetch(`${URL_BASE}/${id}`)
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: GET_CHARACTERS,
          payload: data
        })
      })
  }
}

export const removeCharacter = (id) => {
  return {
    type: REMOVE_CHARACTER,
    payload: id
  }
}

export const filterCards = (gender) => {
  return {
    type: FILTER,
    payload: gender
  }
}
export const orderCards = (order) => {
  return {
    type: ORDER,
    payload: order
  }
}
export const cleanFilter = () => ({
  type: CLEAN_FILTER
})

export const reset = () => ({
  type: RESET
})
