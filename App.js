import React from 'react';
import { createStackNavigator } from 'react-navigation';
import LogIn from './src/components/LogIn'
import MainSignUp from './src/components/MainSignUp'
import AdultSignUp from './src/components/AdultSignUp'
import TeacherSignUp from './src/components/TeacherSignUp'

const RootStack = createStackNavigator(
  {
    // LogIn: {
    //   screen: LogIn,
    // },
    // MainSignUp: {
    //   screen: MainSignUp,
    // },
    
    LogIn: LogIn,
    MainSignUp: MainSignUp,
    AdultSignUp: AdultSignUp,
    TeacherSignUp: TeacherSignUp,
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