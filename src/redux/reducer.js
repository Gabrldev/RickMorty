const initialState = {
  myFavorite: [],
  characterDetail: [],
  characters: [],
  allCharacters: []
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_FAVORITE':
      return {
        ...state,
        allCharacters: [...state.allCharacters, action.payload],
        myFavorite: [...state.allCharacters, action.payload]
      }
    case 'REMOVE_FAVORITE':
      return {
        ...state,
        myFavorite: state.myFavorite.filter(
          (item) => item.id !== action.payload
        ),
        allCharacters: state.allCharacters.filter(
          (item) => item.id !== action.payload
        )
      }
    case 'DETAIL_CHARACTERS':
      return {
        ...state,
        characterDetail: action.payload
      }
    case 'CLEAN_DETAIL':
      return {
        ...state,
        characterDetail: []
      }
    case 'GET_CHARACTERS':
      if (state.characters.find((item) => item.id === action.payload.id)) {
        return state
      } else {
        return {
          ...state,
          characters: [...state.characters, action.payload]
        }
      }
    case 'REMOVE_CHARACTER':
      return {
        ...state,
        characters: state.characters.filter(
          (item) => item.id !== action.payload
        )
      }
    case 'FILTER':
      // eslint-disable-next-line no-case-declarations
      const filterCopy = [...state.characters]
      // eslint-disable-next-line no-case-declarations
      const filterGender = filterCopy.filter(
        (char) => char.gender === action.payload
      )
      return {
        ...state,
        myFavorite: filterGender
      }
    case 'ORDER':
      // eslint-disable-next-line no-case-declarations
      const orderCopy = [...state.allCharacters]
      // eslint-disable-next-line no-case-declarations
      const orderId = orderCopy
      if (action.payload === 'Ascendente') {
        return {
          ...state,
          myFavorite: orderId.sort((a, b) => a.id - b.id)
        }
      } else if (action.payload === 'Descendente') {
        return {
          ...state,
          myFavorite: orderId.sort((a, b) => b.id - a.id)
        }
      }

      return {
        ...state,
        myFavorite: orderId
      }
    case 'CLEAN_FILTER':
      return {
        ...state,
        myFavorite: [...state.allCharacters]
      }

    case 'RESET':
      return {
        ...state,
        myFavorite: [...state.allCharacters]
      }
    default:
      return state
  }
}

export default rootReducer
