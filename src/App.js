// @flow
import React, { Component } from 'react';
import Spinner from 'react-spinkit';

// Redux
import { Provider } from 'react-redux';
import configureStore from './Redux/configureStore';
import { PersistGate } from 'redux-persist/integration/react';

// Components
import RootContainer from './Containers/RootContainer';

const { store, persistor } = configureStore();

const onBeforeLift = () => {};

type Props = {};
type State = {};

class App extends Component<Props, State> {
    state = {};

    render() {
        return (
            <Provider store={store}>
                <PersistGate
                    loading={<Spinner name="ball-beat" />}
                    onBeforeLift={onBeforeLift}
                    persistor={persistor}
                >
                    <RootContainer />
                </PersistGate>
            </Provider>
        );
    }
}

export default App;
