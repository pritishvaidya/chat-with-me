// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import Menu from 'react-feather/dist/icons/menu';
import Back from 'react-feather/dist/icons/arrow-left';
import Sidebar from 'react-sidebar';

// Redux
import { connect } from 'react-redux';
import { setSidebarState } from '../Redux/Actions';

// Styles
import { Colors, media } from '../Theme/Global';

// Components
import SidebarContent from './Sidebar';
import PersonalityAvatar from './PersonalityAvatar';
import Questions from './Questions';
import Answers from './Answers';
import AudioPlayer from './Audio'

type Props = {
    open: boolean,
    setSidebarState: boolean => void,
};
type State = {
    touch: boolean,
    transitions: boolean,
    shadow: boolean,
    pullRight: boolean,
    touchHandleWidth: number,
    dragToggleDistance: number,

};

class RootContainer extends Component<Props, State> {
    constructor(props) {
        super(props);
        this.state = {
            transitions: true,
            touch: true,
            shadow: true,
            pullRight: false,
            touchHandleWidth: 20,
            dragToggleDistance: 30,
        };
    }

    onSetOpen = () => {
        const { open, setSidebarState } = this.props;
        setSidebarState(open);
    };

    render() {
        const { open } = this.props;
        const {
            touch,
            shadow,
            pullRight,
            touchHandleWidth,
            dragToggleDistance,
            transitions,
        } = this.state;
        const sidebarContent = <SidebarContent />;
        const sidebarProps = {
            sidebar: sidebarContent,
            sidebarClassName: 'custom-sidebar-class',
            open,
            touch,
            shadow,
            pullRight,
            touchHandleWidth,
            dragToggleDistance,
            transitions,
            onSetOpen: this.onSetOpen,
        };

        return (
            <Sidebar {...sidebarProps}>
                <Wrapper>
                    <IconsWrapper onClick={this.onSetOpen}>
                        {!open ? (
                            <Menu color={Colors.Primary} size={60} />
                        ) : (
                            <Back color={Colors.Primary} size={60} />
                        )}
                    </IconsWrapper>
                    <PersonalityAvatar />
                    <Answers />
                    <Questions />
                    <AudioPlayer/>
                </Wrapper>
            </Sidebar>
        );
    }
}

const mapStateToProps = state => ({
    open: state.sidebar.open,
});

const mapDispatchToProps = dispatch => ({
    setSidebarState: open => dispatch(setSidebarState(open)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RootContainer);

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: ${window.innerHeight}px
    background-color: ${Colors.Background};
    overflow-x: hidden;
`;

const IconsWrapper = styled.div`
    position: absolute;
    top: 0px;
    left: 40px;
    height: 100px;
    padding-top: 35px;
    align-items: center;
    justify-content: center;
    z-index: 10;
    ${media.tablet`left: 0px; height: 80px; padding-top: 15px; padding-left: 15px`} ${media.phone`left: 0px; height: 80px; padding-top: 15px; padding-left: 15px`};
`;
