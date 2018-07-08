import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Colors } from '../../Theme/Global';
import Utils from '../../Utils';

import Professional from '../../Assets/Professional';
import MetalMusic from '../../Assets/MetalMusic';
import MultiplayerGames from '../../Assets/MultiplayerGames';
import FlamencoGuitar from '../../Assets/FlamencoGuitar';
import Anime from '../../Assets/Anime';

const animationImages = {
    professional: Professional,
    metal: MetalMusic,
    games: MultiplayerGames,
    guitar: FlamencoGuitar,
    anime: Anime,
};

type Props = {};
type State = {
    animationSequenceImage: any,
};

class PersonalityAvatar extends Component<Props, State> {
    constructor(props) {
        super(props);
        this.state = {
            animationSequenceImage: Professional.Normal,
            label: props.label,
        };
        this.currentAnimationSequence = null;
        this.animationImages = animationImages.professional;
    }

    componentDidMount() {
        this.blink();
    }

    shouldComponentUpdate(nextProps) {
        if (nextProps.label !== this.state.label) {
            this.setState({
                animationSequenceImage: animationImages[nextProps.label].Normal,
                label: nextProps.label,
            });
            this.animationImages = animationImages[nextProps.label];
        }
        return true;
    }

    changeAnimationSequence = (seq, start) => {
        this.setState({
            animationSequenceImage:
                seq === 0
                    ? this.animationImages.Normal
                    : this.animationImages.Blinking[seq - 1],
        });
    };

    // Animations
    blink = () => {
        const delay = Utils.delay;
        const change = this.changeAnimationSequence;
        // If any animation already running
        if (this.currentAnimationSequence) {
            this.currentAnimationSequence.cancel();
        }

        this.currentAnimationSequence = delay(5000, () => change(0, true))
            .delay(75, () => change(1))
            .delay(75, () => change(2))
            .delay(75, () => change(3))
            .delay(100, () => change(4))
            .delay(75, () => change(3))
            .delay(75, () => change(2))
            .delay(75, () => change(1))
            .delay(75, () => change(0))
            .delay(75, () => this.blink());
    };

    render() {
        return (
            <AvatarWrapper ref={'avatar'}>
                <ImageBackground src={this.animationImages.Background} />
                <Image src={this.state.animationSequenceImage} />
            </AvatarWrapper>
        );
    }
}

const mapStateToProps = state => ({
    label: state.sidebar.label,
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(PersonalityAvatar);

const AvatarWrapper = styled.div`
  display: flex
  width: ${window.innerWidth}px
  height: ${window.innerHeight * 0.6}px
  position: relative
`;

const ImageBackground = styled.img`
  flex: 1
  width: 100%
  filter: blur(10px);
`;

const Image = styled.img`
  position: absolute;
  top: 0
  height: ${window.innerHeight * 0.6}px
  left: 40%
`;
