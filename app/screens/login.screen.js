import React, { Component } from 'react';
import { Container, Content } from "native-base";
import {
  View,
  ImageBackground,
  StyleSheet,
  Dimensions
} from "react-native";
import { inject } from "mobx-react";
import Login from '../components/login.component';

@inject('stores')
export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {stores} = this.props;

    return (
      <Container fluid>
        <View style={styles.container}>
          <Content scrollEnabled={false}>
            {/* <ImageBackground source={stores.config.LoginBG} style={styles.loginBackground}> */}
              <View style={styles.loginForeground}>
                <Login {...this.props} />
              </View>
            {/* </ImageBackground> */}
          </Content>
        </View>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    // position: 'absolute',
    flex: 1,
    left: 0,
    bottom: 0,
    backgroundColor: '#373b44'
  },

  loginBackground: {
    flex: 1,
    width: undefined,
    height: undefined,
    alignSelf: 'stretch',
    resizeMode: 'contain'
  },

  loginForeground: {
    flex: 1,
    marginTop: Dimensions.get('window').height/1.75,
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 90,
    bottom: 0
  }
});