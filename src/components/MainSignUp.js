import React, { Component } from 'react';
import { Alert, Platform, Dimensions, StyleSheet, Text, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, View } from 'react-native';
import styles from '../styles';

export default class MainSignUp extends Component {
  static navigationOptions = {
    title: 'Registro',
  };

  register() {
    Alert.alert('Adulto responsable!')
  }

  logIn() {
    Alert.alert('Docente')
  }

  render() {
    return (
      <View>

        <View style={styles.boxText}>
          <Text style={styles.headling}>¿Qué tipo de usuario desea crear?</Text>
        </View>

        <View style={styles.containerButtons}>
          <TouchableHighlight onPress={() => this.props.navigation.navigate('AdultSignUp')} underlayColor="white">
            <View style={[styles.button, styles.botonregistro]}>
              <Text style={styles.buttonText}>Adulto responsable</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight onPress={() => this.props.navigation.navigate('TeacherSignUp')} underlayColor="white">
            <View style={[styles.button, styles.botoniniciarsesion]}>
              <Text style={styles.buttonText}>Docente</Text>
            </View>
          </TouchableHighlight>
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