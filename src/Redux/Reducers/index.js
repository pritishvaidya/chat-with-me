/* eslint-disable global-require */
import { combineReducers } from 'redux';
import MainReducer from './MainRedux'

const RootReducer = combineReducers({
  labels: MainReducer.labels
})

export default RootReducer
