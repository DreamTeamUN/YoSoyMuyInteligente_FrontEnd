import React, { Component } from 'react';
import { Alert, Dimensions, StyleSheet, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, View } from 'react-native';
import {Text, Button} from 'react-native-paper';
import styles from '../styles';

export default class Main extends Component {
  // static navigationOptions = {
  //   title: 'Login',
  // };

  render() {
    return (
      <View >

        <View style={styles.textContainer}>
          <Text style={{fontSize:40, textAlign: 'center', textAlignVertical: 'center'}}>
            Yo Soy Muy Inteligente UN</Text>
        </View>

        <View style={styles.buttonsContainer}>

            <View style={styles.button}>
              <Button
                mode="contained"
                icon="person-add"
                onPress={() => this.props.navigation.navigate('MainSignUp')}>
                Registro</Button>
            </View>


            <View style={styles.button}>
              <Button
                mode="contained"
                icon="person"
                color='#90CAF9'
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
