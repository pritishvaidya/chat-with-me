import {
  SET_ACTIVE_LABEL,
} from '../Types';

export function setActiveLabel(label) {
  return {
    type: SET_ACTIVE_LABEL,
    label,
  };
}
