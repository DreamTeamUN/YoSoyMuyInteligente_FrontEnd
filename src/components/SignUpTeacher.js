import React, { Component } from 'react';
import { Alert, View, TextInput } from 'react-native';
import { Text, Button, Icon, Label, Form, Item, Input } from 'native-base';
import axios from 'axios';
import { API_SIGN_UP_TEACHER } from '../config/const';
import styles from '../styles';

export default class SignUpTeacher extends Component {
  static navigationOptions = {
    title: 'Registro docente',
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

  _createTeacher() {
    if (this._validate(this.state.username, this.state.password, this.state.password2, this.state.email)) {
      Alert.alert("Creando docente")
      axios.post(API_SIGN_UP_TEACHER, {
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
              value={this.state.email}
            />
          </Item>

        </Form>

        <View style={styles.adult_ButtonsContainer}>
          <View>
            <Button iconLeft rounded style={styles.buttonclear}
              onPress={() => Alert.alert('Pantalla faltante')}>
              <Icon type="MaterialIcons" name="group-add" />
              <Text>Crear Aula (PF)</Text>
            </Button>
          </View>
          <View>
            <Button iconLeft rounded style={styles.buttondark}
              onPress={this._createTeacher.bind(this)} >
              <Icon type="MaterialIcons" name="done" />
              <Text>Finalizar Registro</Text>
            </Button>
          </View>
        </View>
      </View>
    );
  }
}
