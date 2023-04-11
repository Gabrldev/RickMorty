const initialState = {
  myFavorite: [],
  chararacterDetail: [],
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

    default:
      return { ...state };
  }
};

export default rootReducer;
