export const ADD_FAVORITE = 'ADD_FAVORITE'
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE'
export const CHARACTERS = 'CHARACTERS'

export const addFavorite = (character) => {
    return {
        type: ADD_FAVORITE,
        payload: character,
    }
}
export const removeFavorite = (id) => {
    return {
        type: REMOVE_FAVORITE,
        payload: id,
    }
}

export const characters = (characters) => {
    return {
        type: CHARACTERS,
        payload: characters,
    }
}
