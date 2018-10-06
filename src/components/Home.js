import React, { Component } from 'react';
import { Alert, StyleSheet, TouchableNativeFeedback, View, ScrollView } from 'react-native';
import {Text, Button} from 'react-native-paper';
import styles from '../styles';

export default class Home extends Component {
  // static navigationOptions = {
  //   title: 'Inicio',
  // };

  render() {
    return (
      <View>
        <View style={styles.home_TextContainer}>
          <Text style={styles.headling}>¡Bienvenido!</Text>
        </View>

        <View style={styles.home_ContainerButtons}>
            <View style={styles.button}>
              <Button
                mode="contained"
                icon="apps"
                onPress={() => this.props.navigation.navigate('WeekProgress')}>
                Progreso Semanas</Button>
            </View>

            <View style={styles.button}>
              <Button
                mode="contained"
                icon="videogame-asset"
                color='#90CAF9'
                onPress={() => this.props.navigation.navigate('Sentence')}>
                Progreso Juegos</Button>
            </View>

            <View style={[styles.button, styles.buttonBlueB]}>
              <Button
                mode="contained"
                icon="forum" //outline?
                onPress={() => this.props.navigation.navigate('Forum')}>
                Ingreso al foro</Button>
            </View>
        </View>
      </View>
    );
  }
}
