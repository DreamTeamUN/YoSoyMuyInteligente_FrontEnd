import React from 'react';
import { ActivityIndicator, AsyncStorage, StatusBar, View } from 'react-native';
import { createStackNavigator, createSwitchNavigator } from 'react-navigation';
import { AppStack, AuthStack } from './src/routes';
import styles from './src/styles';

class LoadingScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = { isLoading: true };
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
    });
    this.setState({ isLoading: false });
    this._bootstrapAsync();
  }

  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('access_token');
    let initialRouteName = userToken ? 'App' : 'Auth';
    this.props.navigation.navigate(initialRouteName);
  };

  render() {
    if (this.state.isLoading) {
      return <Expo.AppLoading />;
    }
    return (
      <View style={styles.textContainer}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}


export default createSwitchNavigator({
  Loading: LoadingScreen,
  App: AppStack,
  Auth: AuthStack,
});
