const initialState = {
  myFavorite: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_FAVORITE":
      return { 
        ...state, myFavorite: [...state.myFavorite, action.payload] 
    };
    case "REMOVE_FAVORITE":
        return {
            ...state, myFavorite: state.myFavorite.filter((item) => item.id !== action.payload)
        }
    default:
      return { ...state };
  }
};

export default rootReducer;
