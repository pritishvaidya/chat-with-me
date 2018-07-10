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
    },
    audio: null,
    currentConversation: Professional.conversations.slice(0, 4),
    loader: false,
    mood: 'normal',
    sound: null
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
    if (action.type === SET_CURRENT_CONVERSATION) {
        return { ...state, currentConversation: action.conversation };
    } else if (action.type === SET_QUESTION) {
        return { ...state, question: action.question };
    } else if (action.type === SET_ANSWER) {
        return { ...state, answer: action.answer };
    } else if (action.type === SET_LOADER) {
      return { ...state, loader: action.loader };
    } else if (action.type === SET_MOOD) {
      return { ...state, mood: action.mood };
    } else if (action.type === SET_SOUND) {
      return { ...state, sound: action.sound };
    }
    return state;
};

export default {
    sidebar,
    conversation,
};
