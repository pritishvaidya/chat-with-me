// @flow
import React, { Component } from 'react';
import styled from 'styled-components';

// Redux
import { connect } from 'react-redux';

// Styles
import { Colors } from '../Theme/Global';

// Components
import Labels from './Labels'

type Props = {
};

type State = {
};

class RootContainer extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Wrapper>
        <Labels/>
      </Wrapper>
    );
  }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(RootContainer);

const Wrapper = styled.div`
    background-color: ${Colors.Background};
    overflow-x: hidden;
`;
