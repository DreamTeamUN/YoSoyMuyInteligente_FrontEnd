import React, { Component } from 'react';
import { View } from 'react-native';
import styles from '../styles';
import Expo from "expo";
import { Button, Icon, Text } from 'native-base';

export default class Main extends Component {

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
    }

    render() {
      if (this.state.isLoading) {
        return <Expo.AppLoading />;
      }
      return (
        <View>
          <View style={styles.textContainer}>
          <Text style={styles.title}>Yo Soy Muy Inteligente</Text>
        </View>

          <View style = {styles.buttonsContainer}>
            <View><Button iconLeft rounded style = {styles.buttonclear}
              onPress={() => this.props.navigation.navigate('SignUpMain')}>
                <Icon name="person-add" />
                <Text>Registro</Text>
            </Button>
            </View>

            <View><Button iconLeft rounded style = {styles.buttondark}
              onPress={() => this.props.navigation.navigate('LogInTypeUser')}>
                <Icon name="person" />
                <Text>Iniciar Sesión</Text>
            </Button></View>
          </View>
        </View>
    );
}
}
