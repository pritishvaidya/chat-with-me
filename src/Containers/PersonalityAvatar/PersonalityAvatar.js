import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
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

class PersonalityAvatar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            animationSequenceImage: animationImages[props.label].Normal,
            label: props.label,
            mood: props.mood,
        };
        this.currentAnimationSequence = null;
        this.animationImages = animationImages[props.label];
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
        } else if (nextProps.mood !== this.state.mood) {
            this.setState(
                {
                    mood: nextProps.mood,
                },
                () => this.doAnimation(nextProps.mood)
            );
        }
        return true;
    }

    changeAnimationSequence = (seq, start) => {
        let defaultAnimationImageTag;
        const { mood } = this.props;

        if (mood === 'happy') {
            defaultAnimationImageTag = 'Happy';
        } else if (mood === 'angry') {
            defaultAnimationImageTag = 'Angry';
        } else {
            defaultAnimationImageTag = 'Blinking';
        }
        this.setState({
            animationSequenceImage:
                seq === 0
                    ? this.animationImages.Normal
                    : this.animationImages[defaultAnimationImageTag][seq - 1],
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

    happy = () => {
        const delay = Utils.delay;
        const change = this.changeAnimationSequence;

        // If any animation already running
        if (this.currentAnimationSequence) {
            this.currentAnimationSequence.cancel();
        }

        this.currentAnimationSequence = delay(0, () => change(0, true))
            .delay(25, () => change(1))
            .delay(25, () => change(2))
            .delay(25, () => change(3))
            .delay(25, () => change(4))
            .delay(2000, () => change(3))
            .delay(25, () => change(2))
            .delay(25, () => change(1))
            .delay(25, () => change(0))
            .delay(25, () => this.blink());
    };

    angry = () => {
        const delay = Utils.delay;
        const change = this.changeAnimationSequence;

        // If any animation already running
        if (this.currentAnimationSequence) {
            this.currentAnimationSequence.cancel();
        }

        this.currentAnimationSequence = delay(0, () => change(0, true))
            .delay(25, () => change(1))
            .delay(25, () => change(2))
            .delay(25, () => change(3))
            .delay(25, () => change(4))
            .delay(2000, () => change(3))
            .delay(25, () => change(2))
            .delay(25, () => change(1))
            .delay(25, () => change(0))
            .delay(25, () => this.blink());
    };

    doAnimation = mood => {
        switch (mood) {
            case 'happy':
                return this.happy();
            case 'angry':
                return this.angry();
            default:
                return this.blink();
        }
    };

    render() {
        return (
            <AvatarWrapper ref={'avatar'}>
                <ImageBackground src={this.animationImages.Background} />
                <Image src={this.state.animationSequenceImage} />

                {/*TODO: check for the webpack issue*/}
                <ImageHidden src={this.animationImages.Blinking[0]} />
                <ImageHidden src={this.animationImages.Blinking[1]} />
                <ImageHidden src={this.animationImages.Blinking[2]} />
                <ImageHidden src={this.animationImages.Blinking[3]} />

                <ImageHidden src={this.animationImages.Happy[0]} />
                <ImageHidden src={this.animationImages.Happy[1]} />
                <ImageHidden src={this.animationImages.Happy[2]} />
                <ImageHidden src={this.animationImages.Happy[3]} />

                <ImageHidden src={this.animationImages.Angry[0]} />
                <ImageHidden src={this.animationImages.Angry[1]} />
                <ImageHidden src={this.animationImages.Angry[2]} />
                <ImageHidden src={this.animationImages.Angry[3]} />
            </AvatarWrapper>
        );
    }
}

const mapStateToProps = state => ({
    label: state.sidebar.label,
    mood: state.conversation.mood,
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
  display: flex;
  flex: 1
  width: 100%
  filter: blur(10px);
  height: ${window.innerHeight * 0.5}px;
`;

const Image = styled.img`
    position: absolute;
    top: 0;
    margin: auto;
    right: 0;
    left: 0;
    height: ${window.innerHeight * 0.5}px;
`;

const ImageHidden = styled.img`
    visibility: hidden;
    overflow: hidden;
    height: 0;
    width: 0;
`;
