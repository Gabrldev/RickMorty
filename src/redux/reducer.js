const initialState = {
  myFavorite: [],
  characterDetail: [],
  characters: [],
  allCharacters: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_FAVORITE":
      return {
        ...state,
        allCharacters: [...state.allCharacters, action.payload],
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
        characterDetail: action.payload,
      };
    case "CLEAN_DETAIL":
      return {
        ...state,
        characterDetail: [],
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
    case "FILTER":
      const filterCopy = [...state.characters];
      const filterGender = filterCopy.filter(
        (char) => char.gender === action.payload
      );
      return {
        ...state,
        myFavorite: filterGender,
      };
    case "ORDER":
      const orderCopy = [...state.myFavorite];
      const order = orderCopy.sort((a, b) => {
        if (a.id > b.id) {
          return action.payload === "Ascendente" ? 1 : -1;
        } else if (a.id < b.id) {
          return action.payload === "Ascendente" ? -1 : 1;
        } else {
          return 0;
        }
      });
      return {
        ...state,
        myFavorite: order,
      };
    default:
      return state;
  }
};

export default rootReducer;
