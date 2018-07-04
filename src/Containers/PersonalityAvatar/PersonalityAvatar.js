// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import {Colors} from "../../Theme/Global";

import Professional from '../../Assets/Professional'

type Props = {}
type State = {}

class PersonalityAvatar extends Component<Props, State> {
    state = {};

    render () {
      return (
        <AvatarWrapper ref={'avatar'}>
          <ImageBackground src={Professional.Background}/>
          <Image src={Professional.Normal}/>
        </AvatarWrapper>
      )
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
`

const ImageBackground = styled.img`
  height: 600px;
  width: 100%
  filter: blur(10px);
`

const Image = styled.img`
  position: absolute;
  bottom: 0
  height: 600px
  left: 40%
`
