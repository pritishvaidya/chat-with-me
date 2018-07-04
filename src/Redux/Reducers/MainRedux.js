// @flow
import {SET_ACTIVE_LABEL, SET_SIDEBAR_STATE} from '../Types'

const initialState = {
  label: 'professional',
  open: false
}

const sidebar = (state = initialState, action: Action) => {
  if (action.type === SET_SIDEBAR_STATE) {
    return {...state, open: !action.open}
  } else if(action.type === SET_ACTIVE_LABEL) {
    return {...state, label: action.label}
  }
  return state
}

export default {
  sidebar
}
