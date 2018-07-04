// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { Colors } from '../../Theme/Global';
import { H1, Paragraph } from '../../Theme/Theme';
import { setActiveLabel, setSidebarState } from '../../Redux/Actions';

type Props = {
  activeLabel: Label,
  setActiveLabel: (Label) => void,
  open: boolean,
  setSidebarState: (open) => void
};
type State = {};

class Sidebar extends Component<Props, State> {
    render() {
        const { activeLabel, setActiveLabel, open, setSidebarState } = this.props;
        return (
            <LabelsWrapper>
                <Label active={activeLabel === 'professional'} onClick={() => {
                  setActiveLabel('professional')
                  setSidebarState(open)
                }}>
                    <H1 active={activeLabel === 'professional'}>Professional</H1>
                </Label>
                <Label active={activeLabel === 'metal'} onClick={() => {
                  setActiveLabel('metal')
                  setSidebarState(open)
                }}>
                    <H1 active={activeLabel === 'metal'}>Metal Music</H1>
                </Label>
                <Label active={activeLabel === 'games'} onClick={() => {
                  setActiveLabel('games')
                  setSidebarState(open)
                }}>
                    <H1 active={activeLabel === 'games'}>Multiplayer Games</H1>
                </Label>
                <Label active={activeLabel === 'guitar'} onClick={() => {
                  setActiveLabel('guitar')
                  setSidebarState(open)
                }}>
                    <H1 active={activeLabel === 'guitar'}>Flamenco Guitar</H1>
                </Label>
                <Label active={activeLabel === 'anime'} onClick={() => {
                  setActiveLabel('anime')
                  setSidebarState(open)
                }}>
                    <H1 active={activeLabel === 'anime'}>Anime</H1>
                </Label>
            </LabelsWrapper>
        );
    }
}

const mapStateToProps = state => ({
    activeLabel: state.sidebar.label,
    open: state.sidebar.open
});

const mapDispatchToProps = dispatch => ({
    setActiveLabel: label => dispatch(setActiveLabel(label)),
    setSidebarState: open => dispatch(setSidebarState(open))
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);

const LabelsWrapper = styled.div`
    padding-top: 150px;
    background-color: rgba(0,0,0, 0.5);
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
