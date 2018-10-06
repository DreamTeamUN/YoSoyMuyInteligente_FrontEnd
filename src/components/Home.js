import React, { Component } from 'react';
import { Alert, StyleSheet, Text, TouchableNativeFeedback, View, ScrollView } from 'react-native';
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
          <TouchableNativeFeedback onPress={() => this.props.navigation.navigate('WeekProgress')} >
            <View style={[styles.button, styles.buttonBlueB]}>
              <Text style={styles.buttonText}>Progreso semanas</Text>
            </View>
          </TouchableNativeFeedback>

          <TouchableNativeFeedback onPress={() => this.props.navigation.navigate('Sentence')} >
            <View style={[styles.button, styles.buttonBlueA]}>
              <Text style={styles.buttonText}>Progreso juegos</Text>
            </View>
          </TouchableNativeFeedback>

          <TouchableNativeFeedback onPress={() => this.props.navigation.navigate('Forum')} >
            <View style={[styles.button, styles.buttonBlueB]}>
              <Text style={styles.buttonText}>Ingresar al foro</Text>
            </View>
          </TouchableNativeFeedback>
        </View>

      </View>
    );
  }
}
