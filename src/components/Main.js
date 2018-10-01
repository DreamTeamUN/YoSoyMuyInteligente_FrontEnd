import React, { Component } from 'react';
import { Alert, Dimensions, StyleSheet, Text, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, View } from 'react-native';
import styles from '../styles';

export default class Main extends Component {
  // static navigationOptions = {
  //   title: 'Login',
  // };

  logIn() {
    Alert.alert('Inicio de sesion')
  }

  render() {
    return (
      <View >

        <View style={styles.textContainer}>
          <Text style={styles.headling}>Yo Soy Muy Inteligente</Text>
        </View>

        <View style={styles.buttonsContainer}>
          <TouchableNativeFeedback onPress={() => this.props.navigation.navigate('MainSignUp')} >
            <View style={[styles.button, styles.buttonBlueA]}>
              <Text style={styles.buttonText}>Registro</Text>
            </View>
          </TouchableNativeFeedback>

          <TouchableNativeFeedback onPress={() => this.props.navigation.navigate('LogInTypeUser')} >
            <View style={[styles.button, styles.buttonBlueB]}>
              <Text style={styles.buttonText}>Iniciar Sesión</Text>
            </View>
          </TouchableNativeFeedback>
        </View >

      </View>
    );
  }
}

// const styles = StyleSheet.create({
//   nombre: {
//     atributo: valor,
//   },
// });