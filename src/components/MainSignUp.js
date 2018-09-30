import React, { Component } from 'react';
import { Alert, Platform, Dimensions, StyleSheet, Text, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, View } from 'react-native';
import styles from '../styles';

export default class MainSignUp extends Component {
  static navigationOptions = {
    title: 'Registro',
  };

  render() {
    return (
      <View>

        <View style={styles.textContainer}>
          <Text style={styles.headling}>¿Qué tipo de usuario desea crear?</Text>
        </View>

        <View style={styles.buttonsContainer}>
          <TouchableNativeFeedback onPress={() => this.props.navigation.navigate('AdultSignUp')} underlayColor="white">
            <View style={[styles.button, styles.buttonBlueA]}>
              <Text style={styles.buttonText}>Adulto responsable</Text>
            </View>
          </TouchableNativeFeedback>

          <TouchableNativeFeedback onPress={() => this.props.navigation.navigate('TeacherSignUp')} underlayColor="white">
            <View style={[styles.button, styles.buttonBlueB]}>
              <Text style={styles.buttonText}>Docente</Text>
            </View>
          </TouchableNativeFeedback>
        </View >

      </View>
    );
  }
}