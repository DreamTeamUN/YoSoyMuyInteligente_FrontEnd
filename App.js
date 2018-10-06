import * as React from 'react';
import { createStackNavigator } from 'react-navigation';
import { Provider as PaperProvider } from 'react-native-paper';
import Main from './src/components/Main'
import MainSignUp from './src/components/MainSignUp'
import AdultSignUp from './src/components/AdultSignUp'
import TeacherSignUp from './src/components/TeacherSignUp'
import LogInTypeUser from './src/components/LogInTypeUser'
import LogIn from './src/components/LogIn'
import Home from './src/components/Home'
import WeekProgress from './src/components/WeekProgress'
import Sentence from './src/components/Sentence'

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
    Home: Home,
    WeekProgress: WeekProgress,
    Sentence: Sentence,
  },
  {
    initialRouteName: 'Main',
    //initialRouteName: 'Home',
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
      <PaperProvider>
        <RootStack />
      </PaperProvider>
    );
  }
}
