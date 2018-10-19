import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import {Text, Button, Icon} from 'native-base';
import styles from '../styles';

export default class HomeStudent extends Component {

  render() {
    return (
      <View>
        <View style={styles.textContainer}>
          <Text style={styles.headling}>¡Bienvenido!</Text>
        </View>

        <View style={styles.buttonsContainer}>

          <View>
            <Button iconLeft rounded style = {styles.buttondark}
            onPress={() => this.props.navigation.navigate('Practicas')}>
                <Icon type="MaterialIcons" name="videogame-asset" />
                <Text>Practicas</Text>
            </Button>
          </View>

          <View>
            <Button iconLeft rounded style = {styles.buttonclear}
              onPress={() => this.props.navigation.navigate('Juegos')}>
                <Icon type="MaterialCommunityIcons" name="forum" />
                <Text>Juegos</Text>
            </Button>
          </View>
        </View>
      </View>
    );
  }
}
