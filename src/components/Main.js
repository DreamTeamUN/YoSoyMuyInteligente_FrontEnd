import React, { Component } from 'react';
import { View} from 'react-native';
import styles from '../styles';
import Expo from "expo";
import {Button, Icon, Text } from 'native-base';

export default class Main extends Component {

    constructor(props) {
      super(props);
      this.state = { loading: true };
    }

    async componentWillMount() {
      await Expo.Font.loadAsync({
        Roboto: require("native-base/Fonts/Roboto.ttf"),
        Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
        Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
      });
      this.setState({ loading: false });
    }
    
    render() {
      if (this.state.loading) {
        return <Expo.AppLoading />;
      }
      return (
        <View>
          <View style={styles.textContainer}>
          <Text style={styles.headling}>Yo Soy Muy Inteligente UN</Text>
        </View>

          <View style = {styles.buttonsContainer}>
            <View style={styles.button}>
            <Button iconLeft rounded style = {styles.buttonclear} onPress={() => this.props.navigation.navigate('SignUpMain')}>
                <Icon name="person-add" />
                <Text>Registro</Text>
            </Button>
            </View>

            <View style={styles.button}>
            <Button iconLeft rounded style = {styles.buttondark} onPress={() => this.props.navigation.navigate('LogInTypeUser')}>
                <Icon name="person" />
                <Text>Iniciar Sesión</Text>
            </Button>
            </View>
          </View>
        </View>
    );
}
}
