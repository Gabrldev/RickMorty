export const ADD_FAVORITE = "ADD_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";
export const DETAIL_CHARACTERS = "DETAIL_CHARACTERS";
export const CLEAN_DETAIL = "CLEAN_DETAIL";
export const GET_CHARACTERS = "GET_CHARACTERS";
export const REMOVE_CHARACTER = "REMOVE_CHARACTER";
export const RANDOM_CHARACTERS = "RANDOM_CHARACTERS";

export const addFavorite = (character) => {
  return {
    type: ADD_FAVORITE,
    payload: character,
  };
};
export const removeFavorite = (id) => {
  return {
    type: REMOVE_FAVORITE,
    payload: id,
  };
};

export const detailCharacters = (id) => {
  return function (dispatch) {
    const URL_BASE = "https://be-a-rym.up.railway.app/api/character";
    const API_KEY = "01c65889effb.1b54c5795354ee1b48e5";
    fetch(`${URL_BASE}/${id}?key=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: DETAIL_CHARACTERS,
          payload: data,
        });
      });
  };
};
export const cleanDetail = () => {
  return {
    type: CLEAN_DETAIL,
  };
};

export const getCharacters = (id) => {
  return function (dispatch) {
    const URL_BASE = "https://be-a-rym.up.railway.app/api/character";
    const API_KEY = "01c65889effb.1b54c5795354ee1b48e5";
    fetch(`${URL_BASE}/${id}?key=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: GET_CHARACTERS,
          payload: data,
        });
      });
  };
};

export const removeCharacter = (id) => {
  return{
    type: REMOVE_CHARACTER,
    payload: id,
  }
}
