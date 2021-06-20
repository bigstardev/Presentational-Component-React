export const initialState = {
    loading: true,
    movies: [],
    errorMessage: null,
    selected: null
};

export const reducer = (state, action) => {
    switch (action.type) {
        case "SEARCH_MOVIES_REQUEST":
            return {
                ...state,
                loading: true,
                errorMessage: null
            };
        case "SEARCH_MOVIES_SUCCESS":
            action.payload.map((movie) => {
                movie.like = false;
            })
            return {
                ...state,
                loading: false,
                movies: action.payload
            };
        case "SEARCH_MOVIES_FAILURE":
            return {
                ...state,
                loading: false,
                errorMessage: action.error
            };
        case "SELECT_INDIVIDUAL_MOVIE":
            return {
                ...state,
                loading: false,
                selected: action.payload
            }
        case "CLOSE_INDIVIDUAL_MOVIE":
            return {
                ...state,
                selected: null
            }
        case "ADD_FAVOURITE":
            return {
                ...state,
                movies: action.payload
            }

        default:
            return state;
    }
};
