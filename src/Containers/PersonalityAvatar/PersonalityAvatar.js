// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Colors } from '../../Theme/Global';
import Utils from '../../Utils';

import Professional from '../../Assets/Professional';

type Props = {};
type State = {
    animationSequenceImage: any,
};

class PersonalityAvatar extends Component<Props, State> {
    constructor(props) {
        super(props);
        this.state = {
            animationSequenceImage: Professional.Normal,
        };
        this.currentAnimationSequence = null;
        this.animationImages = null;
    }

    componentDidMount() {
        this.blink();
    }

    changeAnimationSequence = (seq, start) => {
        this.setState({
            animationSequenceImage:
                seq === 0
                    ? Professional.Normal
                    : Professional.Blinking[seq - 1],
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

        this.animationImages = Professional.Blinking;
        this.currentAnimationSequence = delay(5000, () => change(0, true))
            .delay(75, () => change(1))
            .delay(75, () => change(2))
            .delay(75, () => change(3))
            .delay(75, () => change(4))
            .delay(250, () => change(3))
            .delay(75, () => change(2))
            .delay(75, () => change(1))
            .delay(75, () => change(0))
            .delay(75, () => this.blink());
    };

    render() {
        console.log(this.state.animationSequenceImage);
        return (
            <AvatarWrapper ref={'avatar'}>
                <ImageBackground src={Professional.Background} />
                <Image src={this.state.animationSequenceImage} />
            </AvatarWrapper>
        );
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(PersonalityAvatar);

const AvatarWrapper = styled.div`
  display: flex;
  flex: 1;
  background-color: ${Colors.Background}
  position: relative
`;

const ImageBackground = styled.img`
  height: 600px;
  width: 100%
  filter: blur(10px);
`;

const Image = styled.img`
  position: absolute;
  bottom: 0
  height: 600px
  left: 40%
`;
