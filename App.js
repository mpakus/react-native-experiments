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

type TProps = {};
export default class App extends Component<TProps> {
  render() {
    return (
      <Provider stores={stores}>
        <AppNavigator />
      </Provider>
    );
  }
}
