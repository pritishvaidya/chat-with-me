import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { Colors } from '../../Theme/Global';
import { Paragraph } from '../../Theme/Theme';

import Anime from '../../Data/Anime';
import FlamencoGuitar from '../../Data/FlamencoGuitar';
import MetalMusic from '../../Data/MetalMusic';
import Professional from '../../Data/Professional';
import MultiplayerGames from '../../Data/MultiplayerGames';

import {
    setCurrentConversation,
    setQuestion,
    setAnswer,
    setLoader,
    setMood,
    setSound,
    setConversations,
} from '../../Redux/Actions';
import Utils from '../../Utils';
import { fadeIn } from '../../Theme/Global';

const InitialConversationState = {
    professional: Professional,
    metal: MetalMusic,
    games: MultiplayerGames,
    guitar: FlamencoGuitar,
    anime: Anime,
};

class Questions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
        };
    }

    setConversations = (id, parentId, question, answer, mood, sound) => {
        const delay = Utils.delay;
        const {
            conversations,
            personality,
            setCurrentConversation,
            setQuestion,
            setAnswer,
            setLoader,
            setMood,
            setSound,
            setConversations,
        } = this.props;

        let subsequentConversations = conversations[
            personality
        ].conversations.filter(conversation => conversation.parentId === id);

        const newConversations = JSON.parse(JSON.stringify(conversations));

        if (subsequentConversations.length === 0) {
            const filteredConversations = newConversations[
                personality
            ].conversations.filter(
                conversation => conversation.id !== parentId
            );

            const filteredParentConversations = newConversations[
                personality
            ].conversations.filter(
                conversation =>
                    conversation.id !== parentId && conversation.parentId === ''
            );

            // If the parents are available
            if (filteredParentConversations.length > 0) {
                newConversations[
                    personality
                ].conversations = filteredConversations;
                subsequentConversations = filteredParentConversations.slice(
                    0,
                    4
                );
            } else {
                newConversations[personality].conversations =
                    InitialConversationState[personality].conversations;
                subsequentConversations = InitialConversationState[
                    personality
                ].conversations.slice(0, 4);
            }
            setConversations(newConversations);
        }

        delay(0, () => {
            setQuestion(question);
            setCurrentConversation([]);
            setAnswer(null);
        })
            .delay(2000, () => {
                setQuestion(null);
                setCurrentConversation([]);
                setLoader(true);
            })
            .delay(1000, () => {})
            .delay(2000, () => {
                setQuestion(null);
                setCurrentConversation([]);
                setAnswer(answer);
                setLoader(false);
                setMood(mood);
                setSound(sound);
            })
            .delay(7000, () => {
                setQuestion(null);
                setCurrentConversation(subsequentConversations);
                setAnswer(null);
                setMood('normal');
                setSound(null);
            });
    };

    render() {
        const { currentConversation } = this.props;
        return (
            <Wrapper>
                {currentConversation.map(conversation => (
                    <ConversationRow
                        fadeIn
                        key={conversation.id}
                        onClick={() =>
                            this.setConversations(
                                conversation.id,
                                conversation.parentId,
                                conversation.question,
                                conversation.answer,
                                conversation.mood,
                                conversation.sound
                            )
                        }
                    >
                        <Paragraph>{conversation.question}</Paragraph>
                    </ConversationRow>
                ))}
            </Wrapper>
        );
    }
}

const mapStateToProps = state => ({
    id: state.conversation.id,
    personality: state.sidebar.label,
    conversations: state.conversation.conversations,
    currentConversation: state.conversation.currentConversation,
});

const mapDispatchToProps = dispatch => ({
    setCurrentConversation: conversation =>
        dispatch(setCurrentConversation(conversation)),
    setConversations: conversations =>
        dispatch(setConversations(conversations)),
    setQuestion: question => dispatch(setQuestion(question)),
    setAnswer: answer => dispatch(setAnswer(answer)),
    setLoader: loading => dispatch(setLoader(loading)),
    setMood: mood => dispatch(setMood(mood)),
    setSound: sound => dispatch(setSound(sound)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Questions);

const Wrapper = styled.div`
  background-color: ${Colors.Background}
  width: ${window.innerWidth}px
  height: ${window.innerHeight * 0.4}px
`;

const ConversationRow = styled.div`
  animation: ${props => props.fadeIn && fadeIn} 1.2s linear;
  border-bottom: 1px solid ${Colors.Separator};
  display: flex;
  flex-direction: column
  text-align: center
  align-items: center
  justify-content: center
  padding-left: 30px
  padding-right: 30px
  max-height: ${window.innerHeight * 0.1 - 1}px
`;
