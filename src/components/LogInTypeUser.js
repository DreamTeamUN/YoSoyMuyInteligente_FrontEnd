import React, { Component } from 'react';
import { Alert, Platform, Dimensions, StyleSheet, Text, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, View } from 'react-native';
import styles from '../styles';

export default class LogInTypeUser extends Component {
  // static navigationOptions = {
  //   title: 'Titulo',
  // };

  render() {
    return (
      <View>

        <View style={styles.loginTU_TextContainer}>
          <Text style={styles.headling}>Seleccione su tipo de usuario</Text>
        </View>

        <View style={styles.loginTU_ContainerButtons}>
          <TouchableNativeFeedback onPress={() => this.props.navigation.navigate('Home')} underlayColor="white">
            <View style={[styles.button, styles.buttonBlueB]}>
              <Text style={styles.buttonText}>Estudiante</Text>
            </View>
          </TouchableNativeFeedback>

          <TouchableNativeFeedback onPress={() => this.props.navigation.navigate('LogIn')} underlayColor="white">
            <View style={[styles.button, styles.buttonBlueA]}>
              <Text style={styles.buttonText}>Adulto responsable</Text>
            </View>
          </TouchableNativeFeedback>

          <TouchableNativeFeedback onPress={() => this.props.navigation.navigate('LogIn')} underlayColor="white">
            <View style={[styles.button, styles.buttonBlueB]}>
              <Text style={styles.buttonText}>Docente</Text>
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