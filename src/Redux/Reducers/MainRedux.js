import {
    SET_ACTIVE_LABEL,
    SET_SIDEBAR_STATE,
    SET_CONVERSATION,
} from '../Types';

import Anime from '../../Data/Anime';
import FlamencoGuitar from '../../Data/FlamencoGuitar';
import MetalMusic from '../../Data/MetalMusic';
import Professional from '../../Data/Professional';
import MultiplayerGames from '../../Data/MultiplayerGames';

const initialState = {
    label: 'professional',
    open: false,
};

const conversationState = {
    id: '',
    conversations: {
      professional: Professional,
      metal: MetalMusic,
      games: MultiplayerGames,
      guitar: FlamencoGuitar,
      anime: Anime,
    }
};

const sidebar = (state = initialState, action) => {
    if (action.type === SET_SIDEBAR_STATE) {
        return { ...state, open: !action.open };
    } else if (action.type === SET_ACTIVE_LABEL) {
        return { ...state, label: action.label };
    }
    return state;
};

const conversation = (state = conversationState, action) => {
    if (action.type === SET_CONVERSATION) {
        return { ...state, conversation: action.conversation };
    }
    return state;
};

export default {
    sidebar,
    conversation,
};
