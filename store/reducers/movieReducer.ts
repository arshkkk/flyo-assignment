import { DefaultActionType } from "../../types/common";
import { GET_MOVIES, likeMovie, MOVIE_ACTIONS } from "../actions/movieActions";
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
      let { movies } = payload;
      movies = movies.map((movie: MovieType) => ({ ...movie, isLiked: false }));
      return { ...state, isLoading: false, movies, error: undefined };
    case GET_MOVIES.ERROR:
      const { error } = payload;
      return { ...state, isLoading: false, error: error.message };

    // MOVIE ACTION
    case MOVIE_ACTIONS.LIKE:
      const { id } = payload;
      console.log("new starting");
      return {
        ...state,
        movies: state.movies.map((movie: MovieType) => {
          console.log(movie.isLiked);
          if (movie.id === id) {
            return { ...movie, isLiked: true };
          } else return movie;
        }),
      };

    case MOVIE_ACTIONS.UNLIKE:
      const { id: movieId } = payload;
      return {
        ...state,
        movies: state.movies.map((movie: MovieType) => {
          if (movie.id === movieId) return { ...movie, isLiked: false };
          else return movie;
        }),
      };

    default:
      return state;
  }
};
