/* eslint-disable global-require */
import { combineReducers } from 'redux';
import MainReducer from './MainRedux'

const RootReducer = combineReducers({
  sidebar: MainReducer.sidebar,
  conversation: MainReducer.conversation
})

export default RootReducer
