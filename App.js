/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Provider } from 'mobx-react';
import AppNavigator from './app/app.navigator';
import stores from './app/stores';
import { StyleProvider } from "native-base";
import getTheme from './native-base-theme/components';
import tidy from './native-base-theme/variables/tidy';

type TProps = {};
export default class App extends Component<TProps> {
  render() {
    return (
      <Provider stores={stores}>
        <StyleProvider style={getTheme(tidy)}>
          <AppNavigator />
        </StyleProvider>
      </Provider>
    );
  }
}
