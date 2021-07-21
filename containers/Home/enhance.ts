import { compose, lifecycle } from "recompose";
import { connect } from "react-redux";
import { createSelector } from "reselect";

import { DefaultActionFunctionType } from "../../types/common";
import { HomeComponent } from "./Home";

import { getMovies } from "../../store/actions/movieActions";
import { GlobalStateType } from "../../store/reducers/rootReducer";
import { MovieReducerStateType } from "../../store/reducers/movieReducer";

export interface MoviesList {
  getMovies: DefaultActionFunctionType;
  movieReducerState: MovieReducerStateType;
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

export const Home = compose<MoviesList, any>(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle<MoviesList, any>({
    componentDidMount(): void {
      this.props.getMovies();
    },
  })
)(HomeComponent);
