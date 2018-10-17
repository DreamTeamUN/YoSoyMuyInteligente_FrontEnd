import * as React from 'react';
import { createStackNavigator } from 'react-navigation';
import Main from './src/components/Main';
import SignUpMain from './src/components/SignUpMain';
import SignUpAdult from './src/components/SignUpAdult';
import SignUpTeacher from './src/components/SignUpTeacher';
import LogInTypeUser from './src/components/LogInTypeUser';
import LogIn from './src/components/LogIn';
import Home from './src/components/Home';
import WeekProgress from './src/components/WeekProgress';
import Sentence from './src/components/Sentence';
import Juegos from './src/components/Juegos';
import HomeStudent from './src/components/HomeStudent';
import Practicas from './src/components/Practicas';
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
    Home: Home,
    WeekProgress: WeekProgress,
    GameProgress: GameProgress,
    Sentence: Sentence,
    Juegos: Juegos,
    HomeStudent: HomeStudent,
    Practicas: Practicas,
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
