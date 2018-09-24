import React, { Component } from 'react';
import { Alert, Platform, Dimensions, StyleSheet, Text, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, View } from 'react-native';

var { height } = Dimensions.get('window');
var box_height = height / 2;

export default class ButtonBasics extends Component {
  register() {
    Alert.alert('Registro!')
  }
  
  logIn() {
    Alert.alert('Inicio de sesion')
  }

  render() {
    return (
      <View>
        
        <View style={styles.boxText}>
        <Text style={styles.headling}>Yo Soy Muy Inteligente</Text>
        </View>

        <View style={styles.containerButtons}>
          <TouchableHighlight onPress={this.register} underlayColor="white">
            <View style={[styles.button, styles.botonregistro]}>
              <Text style={styles.buttonText}>Registro</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight onPress={this.logIn} underlayColor="white">
            <View style={[styles.button, styles.botoniniciarsesion]}>
              <Text style={styles.buttonText}>Iniciar Sesión</Text>
            </View>
          </TouchableHighlight>
        </View >

      </View>
    );
  }
}

const styles = StyleSheet.create({
  boxText: {
    // backgroundColor: '#868ce1',
    height: box_height,
    justifyContent: 'flex-end',
    // alignItems: 'center',
  },
  headling: {
    color: '#515151',
    fontWeight: 'bold',
    fontSize: 42,
    textAlign: 'center',
  },
  containerButtons: {
    // backgroundColor: '#868ce1',
    height: box_height,
    // flex: 1,
    flexDirection: 'column',
    paddingTop: 60,
    paddingBottom: 50,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  button: {
    borderRadius: 50,
    marginBottom: 20,
    width: 260,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  buttonText: {
    padding: 10,
    color: 'white',
    fontSize: 25,
  },
  botonregistro: {
    backgroundColor: '#5D99C6'
  },
  botoniniciarsesion: {
    backgroundColor: '#90CAF9'
  }
});
