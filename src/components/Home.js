import React, { Component } from 'react';
import { Alert, StyleSheet, Text, TouchableNativeFeedback, View, ScrollView } from 'react-native';
import styles from '../styles';

export default class Home extends Component {
  // static navigationOptions = {
  //   title: 'Inicio',
  // };

  render() {
    return (
      <ScrollView>

        <View style={styles.home_TextContainer}>
          <Text style={styles.headling}>¡Bienvenido!</Text>
        </View>

        <View style={styles.home_ContainerButtons}>
          <TouchableNativeFeedback onPress={() => Alert.alert('Progreso semanas')} >
            <View style={[styles.button, styles.buttonBlueB]}>
              <Text style={styles.buttonText}>Progreso semanas</Text>
            </View>
          </TouchableNativeFeedback>

          <TouchableNativeFeedback onPress={() => Alert.alert('Progreso juegos')} >
            <View style={[styles.button, styles.buttonBlueA]}>
              <Text style={styles.buttonText}>Progreso juegos</Text>
            </View>
          </TouchableNativeFeedback>

          <TouchableNativeFeedback onPress={() => this.props.navigation.navigate('Ingresar al foro')} >
            <View style={[styles.button, styles.buttonBlueB]}>
              <Text style={styles.buttonText}>Ingresar al foro</Text>
            </View>
          </TouchableNativeFeedback>
        </View >

      </ScrollView>
    );
  }
}