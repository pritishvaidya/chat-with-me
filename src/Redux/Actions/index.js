import { SET_ACTIVE_LABEL, SET_SIDEBAR_STATE } from '../Types';

export function setActiveLabel(label) {
    return {
        type: SET_ACTIVE_LABEL,
        label,
    };
}

export function setSidebarState(open) {
    return {
        type: SET_SIDEBAR_STATE,
        open,
    };
}
