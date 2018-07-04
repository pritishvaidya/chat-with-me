/* eslint-disable global-require */
import { combineReducers } from 'redux';
import MainReducer from './MainRedux'

const RootReducer = combineReducers({
  sidebar: MainReducer.sidebar
})

export default RootReducer
