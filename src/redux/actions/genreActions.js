import axios from "axios";
import { options } from "../../constants";
import { ActionTypes } from "../actionTypes";

export const getGenres = () => (dispatch) => {
  dispatch({ type: ActionTypes.GENRES_LOADING });

  axios
    .get("https://api.themoviedb.org/3/genre/movie/list", options)
    .then((res) =>
      dispatch({ type: ActionTypes.GENRES_SUCCESS, payload: res.data.genres })
    )
    .catch((err) =>
      dispatch({ type: ActionTypes.GENRES_ERROR, payload: err.message })
    );
};
