import React, { Component } from 'react';
import { View, Image } from 'react-native';
import Expo from "expo";
import { Button, Icon, Text } from 'native-base';
import styles from '../styles';

export default class Main extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <View style={styles.imageContainer}>
          <Image style={styles.logoinicial} source={require('../assets/logoinicial.png')} />
        </View>

        <View style={styles.buttonsContainer}>
          <View><Button iconLeft rounded style={styles.buttonclear}
            onPress={() => this.props.navigation.navigate('SignUpMain')}>
            <Icon name="person-add" />
            <Text>Registro</Text>
          </Button>
          </View>

          <View>
            <Button iconLeft rounded style={styles.buttondark}
              onPress={() => this.props.navigation.navigate('LogInTypeUser')}>
              <Icon name="person" />
              <Text>Iniciar Sesión</Text>
            </Button>
          </View>
        </View>
      </View>
    );
  }
}
