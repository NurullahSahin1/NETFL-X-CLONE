import { ActionTypes } from "../actionTypes";

const initialState = {
  popularMovies: [],
  isLoading: false,
  isError: false,
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.MOVIE_LOADING:
      return { ...state, isLoading: true };
    case ActionTypes.MOVIE_ERROR:
      return { ...state, isLoading: false, isError: true };
    case ActionTypes.MOVIE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        popularMovies: action.payload,
      };

    default:
      return state;
  }
};

export default movieReducer;
