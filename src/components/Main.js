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

        <View style={styles.boxText}>
          <Text style={styles.headling}>Yo Soy Muy Inteligente</Text>
        </View>

        <View style={styles.containerButtons}>
          <TouchableNativeFeedback onPress={() => this.props.navigation.navigate('MainSignUp')} underlayColor="white">
            <View style={[styles.button, styles.botonregistro]}>
              <Text style={styles.buttonText}>Registro</Text>
            </View>
          </TouchableNativeFeedback>

          <TouchableNativeFeedback onPress={() => this.props.navigation.navigate('LogInTypeUser')} underlayColor="white">
            <View style={[styles.button, styles.botoniniciarsesion]}>
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