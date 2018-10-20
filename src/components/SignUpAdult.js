import React, { Component } from 'react';
import { Alert, View } from 'react-native';
import { Text, Button, Icon, Label, Form, Item, Input } from 'native-base';
import axios from 'axios';
import { API_SIGN_UP_ADULT } from '../config/const';
import styles from '../styles';

export default class SignUpAdult extends Component {
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
      birthdate: ''
    };
  }


  // Validación Formulario
  _validate(username, password, password2, email) {
    formatotexto = /^[a-zA-Z0-9]+$/;
    formatomail = /\S+@\S+\.\S+/;

    if (formatotexto.test(username)
      && formatomail.test(email)
      && password == password2
      && password.length >= 6
    ) {
      // Alert.alert('El formulario fue llenado correctamente.');
      return true;
    } else {
      Alert.alert('Hay errores en el formulario.');
      return false;
    }
  }

  // prototipo para despues validar cada paramentro individualmente:
  // _validateUsername(text) {
  //   let regExp = /^[a-zA-Z0-9]+$/;
  //   if (!regExp.test(text)) {
  //     this.setState({username:text})
  //     return false
  //   } else {
  //     this.setState({username:text})
  //     return true
  //   }
  // }

  _createAdult() {
    if (this._validate(this.state.username, this.state.password, this.state.password2, this.state.email)) {
      Alert.alert("Creando adulto")
      axios.post(API_SIGN_UP_ADULT, {
        "usuario": {
          "user": this.state.username,
          "password": this.state.password,
          "nombre": this.state.username,
          "email": this.state.email,
          "archivo_id": 0
        }
      });
    }
  };

  render() {
    return (
      <View>

        <Form style={styles.adult_TextInputContainer}>

          <Item floatingLabel style={styles.adult_TextInput}>
            <Label>Nombre de usuario</Label>
            <Input
              maxLength={45}
              // onChangeText={(username) => this._validateUsername(username)}
              onChangeText={(username) => this.setState({ username })}
              value={this.state.username}
            />
          </Item>

          <Item floatingLabel style={styles.adult_TextInput}>
            <Label>Contraseña</Label>
            <Input
              secureTextEntry={true}
              onChangeText={(password) => this.setState({ password })}
              value={this.state.password}
            />
          </Item>

          <Item floatingLabel style={styles.adult_TextInput}>
            <Label>Repita su contraseña</Label>
            <Input
              secureTextEntry={true}
              onChangeText={(password2) => this.setState({ password2 })}
              value={this.state.password2}
            />
          </Item>

          <Item floatingLabel last style={styles.adult_TextInput}>
            <Label>Correo electrónico</Label>
            <Input
              onChangeText={(email) => this.setState({ email })}
              alue={this.state.email}
            />
          </Item>

        </Form>

        <View style={styles.adult_ButtonsContainer}>
          <View style={styles.button}>
            <Button iconLeft rounded style={styles.buttonclear}
              onPress={() => this.props.navigation.navigate('AddStudent')}>
              <Icon name="person-add" />
              <Text>Añadir Estudiante</Text>
            </Button>
            {/* </View> */}

            {/* <View style={styles.button}> */}
            <Button iconLeft rounded
              style={styles.buttondark}
              onPress={this._createAdult.bind(this)} >
              <Icon type="MaterialIcons" name="done" />
              <Text>Finalizar Registro</Text>
            </Button>
          </View>

        </View>

      </View>
    );
  }
}
