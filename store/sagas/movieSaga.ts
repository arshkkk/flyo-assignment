import { all, call, put, takeLatest } from "redux-saga/effects";

import { GET_MOVIES } from "../actions/movieActions";
import { RequestService } from "../../services/RequestService";

function* handleFetchProfileData(): Generator<any> {
  try {
    // get movies
    const data: any = yield call(RequestService.get, "/movies");
    yield put({ type: GET_MOVIES.SUCCESS, payload: { movies: data.movies } });
  } catch (e) {
    yield put({ type: GET_MOVIES.ERROR, payload: { error: e } });
  }
}

export function* watchMovieSaga() {
  yield all([takeLatest(GET_MOVIES.INITIATE, handleFetchProfileData)]);
}
