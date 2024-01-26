import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { setSagaRunner } from '@vmw/queue-for-redux-saga';
import rootReducer from './rootReducer';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(sagaMiddleware)
);

setSagaRunner(sagaMiddleware);