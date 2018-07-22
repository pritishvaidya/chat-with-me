import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Colors } from '../../Theme/Global';
import Spinner from 'react-spinkit';

import { Paragraph } from '../../Theme/Theme';
import { fadeIn, media } from '../../Theme/Global';

class Answers extends Component {
    render() {
        const { question, answer, loader } = this.props;
        return (
            <Wrapper isActive={question || answer || loader}>
                {loader && <Spinner name="ball-beat" />}
                {question && (
                    <QuestionsWrapper question={question}>
                        <Paragraph active>{question}</Paragraph>
                    </QuestionsWrapper>
                )}
                {answer && (
                    <AnswersWrapper answer={answer}>
                        <Paragraph active>{answer}</Paragraph>
                    </AnswersWrapper>
                )}
            </Wrapper>
        );
    }
}

const mapStateToProps = state => ({
    question: state.conversation.question,
    answer: state.conversation.answer,
    loader: state.conversation.loader,
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Answers);

const Wrapper = styled.div`
  background-color: ${Colors.Background}
  width: ${window.innerWidth}px
  height: ${props => (props.isActive ? window.innerHeight * 0.15 : 0)}px
  display: flex
  align-items: center
  justify-content: center
  ${media.phablet`margin-top: 100px`};
  ${media.phone`margin-top: 100px`};
`;

const QuestionsWrapper = styled.div`
  animation: ${props => props.question && fadeIn} 1.2s linear;
  display: inline-flex
  padding-left: 20px;
  padding-right: 20px;
  background-color: ${Colors.Primary}
  border-radius: 1000px
  word-wrap: break-word
  align-items: center
  justify-content: center
  margin-left: 20px
  margin-right: 20px
  text-align: center
  position: relative
  &:before {
    content: ' ';
    position: absolute;
    width: 0;
    height: 0;
    left: 80px;
    bottom: -17px
    top: auto
    right: auto
    border-top: 20px solid red;
	  border-right: 20px solid transparent;
    border-color: ${Colors.Primary} transparent transparent transparent;
  }
`;

const AnswersWrapper = styled.div`
  animation: ${props => props.answer && fadeIn} 1.2s linear;
  display: inline-flex
  padding-left: 30px;
  padding-right: 30px;
  background-color: ${Colors.Black}
  border-radius: 1000px
  word-wrap: break-word
  align-items: center
  justify-content: center
  margin-left: 20px
  margin-right: 20px
  text-align: center
  position: relative
  &:after {
    content: ' ';
    position: absolute;
    width: 0;
    height: 0;
    right: 80px;
    bottom: auto
    top: -17px
    left: auto
    border-bottom: 20px solid ${Colors.Black};
	  border-right: 20px solid transparent;
  }
 
`;
