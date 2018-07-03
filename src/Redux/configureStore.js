// Redux
import { createStore, applyMiddleware } from 'redux';

// Redux Middlewares
import logger from 'redux-logger';

// Reducers
import Reducer from './Reducers';

const middleware = applyMiddleware(logger);

export default function configureStore() {
  const store = createStore(Reducer, middleware);
  return { store };
}
