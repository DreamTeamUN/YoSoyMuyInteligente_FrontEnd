import * as React from 'react';
import { createStackNavigator } from 'react-navigation';
import Main from './src/components/Main';
import SignUpMain from './src/components/SignUpMain';
import SignUpAdult from './src/components/SignUpAdult';
import SignUpTeacher from './src/components/SignUpTeacher';
import LogInTypeUser from './src/components/LogInTypeUser';
import LogIn from './src/components/LogIn';
import HomeAdult from './src/components/HomeAdult';
import WeekProgress from './src/components/WeekProgress';
import Sentence from './src/components/Sentence';
import Games from './src/components/Games';
import HomeStudent from './src/components/HomeStudent';
import Practices from './src/components/Practices';
import GameProgress from './src/components/GameProgress';
import AddStudent from './src/components/AddStudent';

const RootStack = createStackNavigator(
  {
    Main: Main,
    SignUpMain: SignUpMain,
    SignUpAdult: SignUpAdult,
    SignUpTeacher: SignUpTeacher,
    LogInTypeUser: LogInTypeUser,
    LogIn: LogIn,
    WeekProgress: WeekProgress,
    GameProgress: GameProgress,
    Sentence: Sentence,
    Games: Games,
    HomeAdult: HomeAdult,
    HomeStudent: HomeStudent,
    Practices: Practices,
    AddStudent: AddStudent
  },

  {
    initialRouteName: 'Main',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#5D99C6',
        height: 50,
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
    return(
        <RootStack/>
    );
  }
}
