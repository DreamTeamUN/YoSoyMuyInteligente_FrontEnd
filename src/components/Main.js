import React, { Component } from 'react';
import { Alert, Dimensions, StyleSheet, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, View } from 'react-native';
import {Text, Button} from 'react-native-paper'
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
          <Text style={styles.headling}>Yo Soy Muy Inteligente UN</Text>
        </View>

        <View style={styles.buttonsContainer}>
            <View style={[styles.button, styles.buttonBlueA]}>
              <Button
                mode="contained"
                onPress={() => this.props.navigation.navigate('MainSignUp')}>
                Registro</Button>
            </View>


            <View style={[styles.button, styles.buttonBlueB]}>
              <Button
                mode="contained"
                onPress={() => this.props.navigation.navigate('LogInTypeUser')}>
                Iniciar Sesión</Button>
            </View>
        </View>

      </View>
    );
  }
}

// const styles = StyleSheet.create({
//   nombre: {
//     atributo: valor,
//   },
// });
