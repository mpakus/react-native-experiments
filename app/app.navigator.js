import React from 'react';
import { createStackNavigator, createAppContainer, StackNavigator } from 'react-navigation';
import SplashScreen from './screens/splash.screen';
import LoginScreen from './screens/login.screen';
import MatchScreen from './screens/match.screen';

const Splash = {
  screen: SplashScreen,
  navigationOptions: {
    header: null
  }
};

const Login = {
  screen: LoginScreen,
  navigationOptions: {
    header: null
  }
};

const Match = {
  screen: MatchScreen,
  navigationOptions: {
    header: null
  }
  // navigationOptions: {
  //   headerMode: 'screen',
  //   headerTitle: 'Meetings',
  //   drawerLabel: 'Meetings'
  // }
};

const MatchStack = createStackNavigator({
  Match: Match
}, {});

const RouteConfig = {
  initialRoute: 'Splash',
  header: null,
  contentOptions: {
    activeTintColor: '#e91e63',
  },
  drawerType: 'slide'
};

const AppDrawerNavigator = createStackNavigator(
  {
    Splash: Splash,
    Login: Login,
    Match: { screen: MatchStack }
  },
  RouteConfig
);

// import { createAppContainer, createStackNavigator } from 'react-navigation';
// you can also import from @react-navigation/native
// const AppNavigator = createStackNavigator(...);

const AppNavigator = createAppContainer(AppDrawerNavigator);

console.disableYellowBox = true;

export default AppNavigator;