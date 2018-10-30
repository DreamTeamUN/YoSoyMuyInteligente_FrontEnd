import * as React from 'react';
import { createStackNavigator } from 'react-navigation';
import Main from './components/Main';
import SignUpMain from './components/SignUpMain';
import SignUpAdult from './components/SignUpAdult';
import SignUpTeacher from './components/SignUpTeacher';
import LogInTypeUser from './components/LogInTypeUser';
import LogIn from './components/LogIn';
import HomeAdult from './components/HomeAdult';
import WeekProgress from './components/WeekProgress';
import Sentence from './components/Sentence';
import Games from './components/Games';
import HomeStudent from './components/HomeStudent';
import Practices from './components/Practices';
import GameProgress from './components/GameProgress';
import AddStudent from './components/AddStudent';
import EditarPerfil from './components/EditarPerfil';

// export const RootStack = createStackNavigator(
export const AppStack = createStackNavigator(
    {
      EditarPerfil: EditarPerfil,
      HomeAdult: HomeAdult,
      HomeStudent: HomeStudent,
      WeekProgress: WeekProgress,
      GameProgress: GameProgress,
      Sentence: Sentence,
      Games: Games,
      Practices: Practices,
      AddStudent: AddStudent
    },

    {
        initialRouteName: 'HomeAdult',
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


export const AuthStack = createStackNavigator(
    {
        Main: Main,
        SignUpMain: SignUpMain,
        SignUpAdult: SignUpAdult,
        SignUpTeacher: SignUpTeacher,
        LogInTypeUser: LogInTypeUser,
        LogIn: LogIn,
    },
    {
        initialRouteName: 'EditarPerfil',
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
