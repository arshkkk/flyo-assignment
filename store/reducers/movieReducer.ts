import { DefaultActionType } from "../../types/common";
import { GET_MOVIES } from "../actions/movieActions";
import { MovieType } from "../../types/movie";

export interface MovieReducerStateType {
  movies: Array<MovieType>;
  isLoading: boolean;
  error?: {
    message: string;
  };
}

const initialState: MovieReducerStateType = {
  movies: [],
  isLoading: false,
};

export const movieReducer = (
  state: MovieReducerStateType = initialState,
  { type, payload }: DefaultActionType
): MovieReducerStateType => {
  console.log(type);
  switch (type) {
    case GET_MOVIES.INITIATE:
      return { ...state, isLoading: true, error: undefined };
    case GET_MOVIES.SUCCESS:
      const { movies } = payload;
      console.log(movies.length);
      return { ...state, isLoading: false, movies, error: undefined };
    case GET_MOVIES.ERROR:
      const { error } = payload;
      return { ...state, isLoading: false, error: error.message };
    default:
      return state;
  }
};
