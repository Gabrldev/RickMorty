const initialState = {
  myFavorite: [],
  chararacterDetail: [],
  characters: [],
  allCharacters: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_FAVORITE":
      return {
        ...state,
        myFavorite: [...state.myFavorite, action.payload],
      };
    case "REMOVE_FAVORITE":
      return {
        ...state,
        myFavorite: state.myFavorite.filter(
          (item) => item.id !== action.payload
        ),
      };
    case "DETAIL_CHARACTERS":
      return {
        ...state,
        chararacterDetail: action.payload,
      };
    case "CLEAN_DETAIL":
      return {
        ...state,
        chararacterDetail: [],
      };
    case "GET_CHARACTERS":
      if (state.characters.find((item) => item.id === action.payload.id)) {
        return state;
      } else {
        return {
          ...state,
          characters: [...state.characters, action.payload],
        };
      }
    case "REMOVE_CHARACTER":
      return {
        ...state,
        characters: state.characters.filter(
          (item) => item.id !== action.payload
        ),
      };
    case "FILTER_GEN":
      return {
        ...state,
      };
    default:
      return { ...state };
  }
};

export default rootReducer;
