const initialState = {
  myFavorite: [],
  chararacterDetail: [],
  chararacters: [],
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
      return {
        ...state,
        chararacters: [...state.chararacters, action.payload],
      };
    case "REMOVE_CHARACTER":
      return {
        ...state,
        chararacters: state.chararacters.filter(
          (item) => item.id !== action.payload
        ),
      };
    default:
      return { ...state };
  }
};

export default rootReducer;
