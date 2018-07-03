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

class Labels extends Component<Props, State> {
    render() {
        const { activeLabel, setActiveLabel } = this.props;
        console.log(activeLabel)
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
    activeLabel: state.labels.label,
});

const mapDispatchToProps = dispatch => ({
    setActiveLabel: label => dispatch(setActiveLabel(label)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Labels);

const LabelsWrapper = styled.div`
    padding-top: 30px;
    padding-bottom: 30px;
    height: 150px;
    background-color: ${Colors.SecondaryBackground};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

const Label = styled.div`
    height: 70px;
    display: flex;
    padding-left: 50px;
    padding-right: 50px;
    align-items: center;
    justify-content: center;
    background-color: ${props =>
        props.active ? Colors.Primary : Colors.BackgroundLabel};
    margin: 10px;
    border-radius: 37.5px;
    box-shadow: ${props =>
        props.active
            ? `0px 0px 20px 5px ${Colors.Shadow}`
            : `0px 0px 7px 0.5px ${Colors.Shadow}`};
    &: hover {
        box-shadow: 0px 0px 20px 5px ${Colors.Shadow};
    }
`;
