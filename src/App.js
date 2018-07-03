// @flow
import React, { Component } from 'react';

// Redux
import { Provider } from 'react-redux';
import configureStore from './Redux/configureStore';

// Components
import RootContainer from './Containers/RootContainer';

const { store } = configureStore();

type Props = {};
type State = {};

class App extends Component<Props, State> {
  state = {};

  render() {
    return (
      <Provider store={store}>
        <RootContainer />
      </Provider>
    );
  }
}

export default App;
