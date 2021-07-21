import { combineReducers } from "redux";
import { movieReducer as movie, MovieReducerStateType } from "./movieReducer";

export interface GlobalStateType {
  movie: MovieReducerStateType;
}

export const rootReducer = combineReducers({
  movie,
});
