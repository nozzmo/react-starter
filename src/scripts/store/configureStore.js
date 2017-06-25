import { createStore, applyMiddleware, compose } from 'redux';

import createHistory from 'history/createBrowserHistory'
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import { persistStore, autoRehydrate } from 'redux-persist';

import reducer from '../reducers';

const history = createHistory();
const routingMiddleware = routerMiddleware(history);

const configureStore = () => {

  let middlewares = [routingMiddleware, thunk];
  let composeEnhancers = compose;

  if(process.env.NODE_ENV !== 'production') {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  }

  const store = createStore(
    reducer,
    composeEnhancers(
      applyMiddleware(...middlewares),
      autoRehydrate()));

  return new Promise(resolve => {
    persistStore(
      store, {
        whitelist: ['auth'],
        debounce: 500
      },
      () => resolve(store)
    );
  });
}

export default configureStore;
