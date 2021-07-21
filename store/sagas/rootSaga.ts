import { all } from 'redux-saga/effects';
import { watchMovieSaga } from './movieSaga';

export function* rootSaga(): Generator<any> {
  yield all([watchMovieSaga()]);
}
