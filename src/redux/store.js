import { applyMiddleware, combineReducers, createStore } from "redux";
import movieReducer from "../redux/reducers/movieReducer.js";
import { thunk } from "redux-thunk";
import genreReducer from "./reducers/genreReducer";

const rootReducer = combineReducers({
  movieReducer,
  genreReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));
