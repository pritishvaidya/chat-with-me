import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { Colors } from '../../Theme/Global';
import { Paragraph } from '../../Theme/Theme';

import { setCurrentConversation } from '../../Redux/Actions';

class Questions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
        };
    }

    setConversations = (id) => {
        const { conversations, personality, setCurrentConversation } = this.props
        const subsequentConversations = conversations[personality].conversations.filter(conversation => conversation.parentId === id)
        if(subsequentConversations.length > 0) {
          setCurrentConversation(subsequentConversations)
        } else {
            // render new parents
        }
    }

    render() {
        const { currentConversation } = this.props;
        return (
            <Wrapper>
                {currentConversation.map(conversation => (
                    <ConversationRow
                        key={conversation.id}
                        onClick={() =>
                            this.setConversations(conversation.id)
                        }
                    >
                        <Paragraph>{conversation.text}</Paragraph>
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
    currentConversation: state.conversation.currentConversation
});

const mapDispatchToProps = dispatch => ({
  setCurrentConversation: conversation => dispatch(setCurrentConversation(conversation)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Questions);

const Wrapper = styled.div`
  background-color: ${Colors.Background}
  width: ${window.innerWidth}px
  height: ${window.innerHeight * 0.35}px
`;

const ConversationRow = styled.div`
  border-bottom: 1px solid ${Colors.Separator};
  display: flex;
  flex-direction: column
  text-align: center 
  padding-left: 30px
  padding-right: 30px
`;
