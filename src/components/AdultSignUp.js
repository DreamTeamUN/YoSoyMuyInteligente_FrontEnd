import React, { Component } from 'react';
import { Alert, Dimensions, StyleSheet, TouchableNativeFeedback, View, ScrollView } from 'react-native';
import {Text, Button, TextInput} from 'react-native-paper';
import styles from '../styles';

export default class AdultSignUp extends Component {
  static navigationOptions = {
    title: 'Registro adulto',
  };

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      password2: '',
      email: '',
      telephone: ''
    };
  }

  render() {
    return (
      <ScrollView>

        <View style={styles.adult_TextInputContainer}>
          <TextInput
            style={styles.adult_TextInput}
            // textContentType={'username'} // IOS
            placeholder="Nombre de usuario"
            maxLength={45}
            onChangeText={(username) => this.setState({ username })}
          />
          <TextInput
            style={styles.adult_TextInput}
            secureTextEntry={true}
            // textContentType='password' // IOS
            placeholder="Contraseña"
            onChangeText={(password) => this.setState({ password })}
          />
          <TextInput
            style={styles.adult_TextInput}
            secureTextEntry={true}
            placeholder="Repetir contraseña"
            onChangeText={(password2) => this.setState({ password2 })}
          />
          <TextInput
            style={styles.adult_TextInput}
            placeholder="Correo electronico"
            onChangeText={(email) => this.setState({ email })}
          />

        </View>

        <View style={styles.buttonsContainer}>
            <View style={[styles.button, styles.buttonBlueA]}>
              <Button
                mode="contained"
                icon="person-add"
                onPress={() => Alert.alert('Añadir estudiante')}>
                Añadir Estudiante</Button>
            </View>


            <View style={styles.button}>
              <Button
                mode="contained"
                icon="done" //outline?
                color='#90CAF9'
                onPress={() => Alert.alert('Finalizar registro')}>
                Finalizar Registro</Button>
            </View>
        </View>

      </ScrollView>
    );
  }
}

// const styles = StyleSheet.create({
//   nombre: {
//     atributo: valor,
//   },
// });
