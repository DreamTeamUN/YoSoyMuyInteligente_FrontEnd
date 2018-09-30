import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Main from './src/components/Main'
import MainSignUp from './src/components/MainSignUp'
import AdultSignUp from './src/components/AdultSignUp'
import TeacherSignUp from './src/components/TeacherSignUp'
import LogInTypeUser from './src/components/LogInTypeUser'
import LogIn from './src/components/LogIn'

const RootStack = createStackNavigator(
  {
    // LogIn: {
    //   screen: LogIn,
    // },
    // MainSignUp: {
    //   screen: MainSignUp,
    // },

    Main: Main,
    MainSignUp: MainSignUp,
    AdultSignUp: AdultSignUp,
    TeacherSignUp: TeacherSignUp,
    LogInTypeUser: LogInTypeUser,
    LogIn: LogIn,
  },
  {
    initialRouteName: 'Main',
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