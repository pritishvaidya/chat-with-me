// Redux
import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

// Redux Middlewares
import logger from 'redux-logger';

// Reducers
import Reducer from './Reducers';

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, Reducer)

const middleware = applyMiddleware(logger);

export default function configureStore() {
  const store = createStore(persistedReducer, middleware);
  let persistor = persistStore(store)
  return { store, persistor };
}
