import React, { Component } from 'react';
import { Alert, Dimensions, StyleSheet, TouchableNativeFeedback, View, TextInput } from 'react-native';
import {Text, Button, Icon } from 'native-base';
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
      <View>
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
            <View style={styles.button}>
              <Button iconLeft rounded style = {styles.buttonclear} onPress={() => Alert.alert('Añadir estudiante')}>
                  <Icon name="person-add" />
                  <Text>Añadir Estudiante</Text>
              </Button>
            </View>


            <View style={styles.button}>

              <Button iconLeft rounded style = {styles.buttondark} onPress={() => Alert.alert('Finalizar registro')}>
                  <Icon type="MaterialIcons" name="done" />
                  <Text>Finalizar Registro</Text>
              </Button>
            </View>
        </View>
      </View>
    );
  }
}
