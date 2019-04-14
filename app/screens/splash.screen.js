import React, { Component } from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { inject } from 'mobx-react';

const styles = StyleSheet.create({
  splash: {
    flex: 1,
    alignSelf: 'stretch',
    height: undefined,
    width: undefined,
    resizeMode: 'contain'
  },
});

@inject("stores")
export default class SplashScreen extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount(): void {
    const {stores, navigation} = this.props;
    setTimeout(()=>{
      navigation.navigate('Login');
    }, stores.config.SplashTime)
  }

  render() {
    const {stores} = this.props;

    return (
      <View style={{flex: 1}}>
        <Image style={styles.splash} source={stores.config.SplashImg} />
      </View>
    )
  }
}
