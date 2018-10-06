import React, { Component } from 'react';
import { Alert, Platform, Dimensions, StyleSheet, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, View } from 'react-native';
import {Text, Button} from 'react-native-paper';
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
            <View style={styles.button}>
              <Button
                mode="contained"
                icon="face"
                onPress={() => this.props.navigation.navigate('AdultSignUp')}>
                Adulto Responsable</Button>
            </View>

            <View style={styles.button}>
              <Button
                mode="contained"
                icon="school"
                color='#90CAF9'
                onPress={() => this.props.navigation.navigate('TeacherSignUp')}>
                Docente</Button>
            </View>
        </View>

      </View>
    );
  }
}
