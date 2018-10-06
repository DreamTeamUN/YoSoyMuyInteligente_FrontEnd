import React, { Component } from 'react';
import { Alert, Platform, Dimensions, StyleSheet, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, View } from 'react-native';
import {Text, Button} from 'react-native-paper';
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
            <View style={styles.button}>
              <Button
                mode="contained"
                icon="done" //outline?
                onPress={() => this.props.navigation.navigate('Home')}>
                Estudiante</Button>

            <View style={styles.button}>
              <Button
                mode="contained"
                icon="done" //outline?
                color='#90CAF9'
                onPress={() => this.props.navigation.navigate('LogIn')}>
                Adulto Responsable</Button>
            </View>

          <View style={styles.button}>
              <Button
                mode="contained"
                icon="done" //outline?
                onPress={() => this.props.navigation.navigate('LogIn')}>
                Docente</Button>
            </View>
        </View>

      </View>
      </View>
    );
  }
};
