// @flow
import {SET_ACTIVE_LABEL} from '../Types'

const initialState = {
  label: 'professional'
}

const labels = (state = initialState, action: Action) => {
  if (action.type === SET_ACTIVE_LABEL) {
    return {...state, label: action.label}
  }
  return state
}

export default {
  labels
}
