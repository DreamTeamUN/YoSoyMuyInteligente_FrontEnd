import React, { Component } from 'react';
import { ActivityIndicator, AsyncStorage, StatusBar,  } from 'react-native';
import { createStackNavigator, createSwitchNavigator } from 'react-navigation';
import { AppStack, AuthStack } from './src/routes';
import styles from './src/styles';

import { StyleProvider, View } from "native-base";
import getTheme from "./native-base-theme/components";
import variables from "./native-base-theme/variables/commonColor";

class LoadingScreen extends Component {

  constructor(props) {
    super(props);
    // this.state = { isLoading: true };
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
    });
    // this.setState({ isLoading: false });
    this._bootstrapAsync();
  }

  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('access_token');
    let initialRouteName = userToken ? 'App' : 'Auth';
    this.props.navigation.navigate(initialRouteName);
  };

  render() {
    // if (this.state.isLoading) {
    //   return (
    //     <StyleProvider style={getTheme(variables)}>
    //       <Expo.AppLoading />
    //     </StyleProvider>
    //   );
    // }
    return (
      // <StyleProvider style={getTheme(variables)}>
        <View style={styles.textContainer}>
          <ActivityIndicator />
          <StatusBar barStyle="default" />
        </View>
      // </StyleProvider>
    );
  }
}


export default createSwitchNavigator({
  Loading: LoadingScreen,
  App: AppStack,
  Auth: AuthStack,
});
