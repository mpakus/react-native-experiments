import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import SplashScreen from './screens/splash.screen';
import LoginScreen from './screens/login.screen';

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
    Login: Login
  },
  RouteConfig
);

// import { createAppContainer, createStackNavigator } from 'react-navigation';
// you can also import from @react-navigation/native
// const AppNavigator = createStackNavigator(...);

const AppNavigator = createAppContainer(AppDrawerNavigator);

export default AppNavigator;