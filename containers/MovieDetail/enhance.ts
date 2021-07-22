import { compose, lifecycle } from "recompose";
import { connect } from "react-redux";
import { createSelector } from "reselect";

import { DefaultActionFunctionType } from "../../types/common";
import { MovieDetailComponent } from "./MovieDetail";

import {
  getMovies,
  likeMovie,
  unLikeMovie,
} from "../../store/actions/movieActions";
import { GlobalStateType } from "../../store/reducers/rootReducer";
import { MovieReducerStateType } from "../../store/reducers/movieReducer";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackParams } from "../../navigation/stackNavigator";

type MovieDetailsNavigationProp = StackNavigationProp<
  StackParams,
  "Movie Details"
>;

export interface MovieDetailsPropType {
  likeMovie: DefaultActionFunctionType;
  unLikeMovie: DefaultActionFunctionType;
  movieReducerState: MovieReducerStateType;
  navigation: MovieDetailsNavigationProp;
}

const mapDispatchToProps = {
  likeMovie,
  unLikeMovie,
};
const getMovieState = (state: GlobalStateType) => {
  return state.movie;
};

const mapStateToProps = createSelector(
  getMovieState,
  (movieReducerState: MovieReducerStateType) => ({
    movieReducerState,
  })
);

export const MovieDetail = compose<MovieDetailsPropType, any>(
  connect(mapStateToProps, mapDispatchToProps)
)(MovieDetailComponent);
