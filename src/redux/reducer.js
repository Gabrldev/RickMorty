const initialState = {
  myFavorite: [],
  chararacters: [],
  
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
    case "CHARACTERS":
        return {
            ...state, chararacters: action.payload
        }
  
    default:
      return { ...state };
  }
};

export default rootReducer;
