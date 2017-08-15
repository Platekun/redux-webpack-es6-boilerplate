import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise';
import historyMiddleware from '../history';
import rootReducer from '../reducer';

const enhancer = compose(
  applyMiddleware(promiseMiddleware, historyMiddleware)
)(createStore);

export default function configureStore(initialState) {
  return enhancer(rootReducer, initialState);
}
