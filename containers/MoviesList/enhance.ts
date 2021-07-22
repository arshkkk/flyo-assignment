import { compose, lifecycle } from "recompose";
import { connect } from "react-redux";
import { createSelector } from "reselect";

import { DefaultActionFunctionType } from "../../types/common";

import { getMovies } from "../../store/actions/movieActions";
import { GlobalStateType } from "../../store/reducers/rootReducer";
import { MovieReducerStateType } from "../../store/reducers/movieReducer";
import { MoviesListComponent } from "./MoviesList";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackParams } from "../../navigation/stackNavigator";

export type MoviesListNavigationProp = StackNavigationProp<
  StackParams,
  "Movies List"
>;
export interface MoviesListPropType {
  getMovies: DefaultActionFunctionType;
  movieReducerState: MovieReducerStateType;
  navigation: MoviesListNavigationProp;
}

const mapDispatchToProps = {
  getMovies,
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

export const MoviesList = compose<MoviesListPropType, any>(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle<MoviesListPropType, any>({
    componentDidMount(): void {
      this.props.getMovies();
    },
  })
)(MoviesListComponent);
