import {
    SET_ACTIVE_LABEL,
    SET_SIDEBAR_STATE,
    SET_CURRENT_CONVERSATION,
    SET_QUESTION,
    SET_ANSWER,
    SET_LOADER,
    SET_MOOD,
    SET_SOUND
} from '../Types';

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

export function setCurrentConversation(conversation) {
    return {
        type: SET_CURRENT_CONVERSATION,
        conversation,
    };
}

export function setQuestion(question) {
    return {
        type: SET_QUESTION,
        question,
    };
}

export function setAnswer(answer) {
    return {
        type: SET_ANSWER,
        answer,
    };
}

export function setLoader(loader) {
  return {
    type: SET_LOADER,
    loader,
  };
}

export function setMood(mood) {
  return {
    type: SET_MOOD,
    mood,
  };
}

export function setSound(sound) {
  return {
    type: SET_SOUND,
    sound,
  };
}