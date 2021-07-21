import React from 'react';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

import { rootReducer } from './reducers/rootReducer';
import { rootSaga } from './sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore<any, any, any, any>(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

const withProvider = (WrappedComponent: any) => (props: any) =>
  (
    <Provider store={store}>
      <WrappedComponent {...props} />
    </Provider>
  );

export { withProvider };
