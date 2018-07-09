import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { Colors } from '../../Theme/Global';
import { Paragraph } from '../../Theme/Theme';

import { setConversation } from '../../Redux/Actions';

class Questions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
        };
    }

    setConversations = (id) => {

    }

    render() {
        const { conversations, personality } = this.props;
        return (
            <Wrapper>
                {conversations[personality].conversations.slice(0, 4).map(conversation => (
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
    conversations: state.conversation.conversations
});

const mapDispatchToProps = dispatch => ({
    setConversation: id => dispatch(setConversation(id)),
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
