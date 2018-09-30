import React from 'react';
import { createStackNavigator } from 'react-navigation';
import LogIn from './src/components/LogIn'
import MainSignUp from './src/components/MainSignUp'

const RootStack = createStackNavigator(
  {
    LogIn: {
      screen: LogIn,
    },
    MainSignUp: {
      screen: MainSignUp,
    },
  },
  {
    initialRouteName: 'LogIn',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#5D99C6',
        height: 40,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}