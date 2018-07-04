// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { Colors } from '../../Theme/Global';
import { H1, Paragraph } from '../../Theme/Theme';
import { setActiveLabel } from '../../Redux/Actions';

type Props = {
  activeLabel: Label,
  setActiveLabel: (Label) => void
};
type State = {};

class Sidebar extends Component<Props, State> {
    render() {
        const { activeLabel, setActiveLabel } = this.props;
        return (
            <LabelsWrapper>
                <Label active={activeLabel === 'professional'} onClick={() => setActiveLabel('professional')}>
                    <H1 active={activeLabel === 'professional'}>Professional</H1>
                </Label>
                <Label active={activeLabel === 'metal'} onClick={() => setActiveLabel('metal')}>
                    <H1 active={activeLabel === 'metal'}>Metal Music</H1>
                </Label>
                <Label active={activeLabel === 'games'} onClick={() => setActiveLabel('games')}>
                    <H1 active={activeLabel === 'games'}>Multiplayer Games</H1>
                </Label>
                <Label active={activeLabel === 'guitar'} onClick={() => setActiveLabel('guitar')}>
                    <H1 active={activeLabel === 'guitar'}>Flamenco Guitar</H1>
                </Label>
                <Label active={activeLabel === 'anime'} onClick={() => setActiveLabel('anime')}>
                    <H1 active={activeLabel === 'anime'}>Anime</H1>
                </Label>
            </LabelsWrapper>
        );
    }
}

const mapStateToProps = state => ({
    activeLabel: state.sidebar.label,
});

const mapDispatchToProps = dispatch => ({
    setActiveLabel: label => dispatch(setActiveLabel(label)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);

const LabelsWrapper = styled.div`
    padding-top: 150px;
    background-color: rgba(0,0,0, 0.3);
    align-items: center;
    height: ${window.innerHeight - 150}px;
    width: 400px
`;

const Label = styled.div`
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
`;
