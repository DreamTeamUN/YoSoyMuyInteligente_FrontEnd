import * as React from 'react';
import { createStackNavigator } from 'react-navigation';
import Main from './src/components/Main';
import MainSignUp from './src/components/MainSignUp';
import AdultSignUp from './src/components/AdultSignUp';
import TeacherSignUp from './src/components/TeacherSignUp';
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
    MainSignUp: MainSignUp,
    AdultSignUp: AdultSignUp,
    TeacherSignUp: TeacherSignUp,
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
