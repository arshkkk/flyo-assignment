import { compose, lifecycle } from "recompose";
import { connect } from "react-redux";
import { createSelector } from "reselect";

import { FavouriteMoviesComponent } from "./FavouriteMovies";

import { GlobalStateType } from "../../store/reducers/rootReducer";
import { MovieReducerStateType } from "../../store/reducers/movieReducer";

export interface FavouriteMoviesPropType {
  movieReducerState: MovieReducerStateType;
}

const getMovieState = (state: GlobalStateType) => {
  return state.movie;
};

const mapStateToProps = createSelector(
  getMovieState,
  (movieReducerState: MovieReducerStateType) => ({
    movieReducerState,
  })
);

export const FavouriteMovies = compose<FavouriteMoviesPropType, any>(
  connect(mapStateToProps, null)
)(FavouriteMoviesComponent);
