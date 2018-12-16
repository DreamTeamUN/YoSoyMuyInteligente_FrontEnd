import React, { Component } from 'react';
import { ActivityIndicator, Alert, View, ScrollView } from 'react-native';
import { Container, Text, Button, Icon, Label, Form, Item, Input } from 'native-base';
import axios from 'axios';
import { API_SIGN_UP_ADULT } from '../config/const';
import { validateForm } from "../utils/validations";
import { sendDataToSignUp } from "../utils/signUp";
import { sendDataToLogIn, storeToken, getToken, removeToken } from '../utils/logIn';
import styles from '../styles';

export default class SignUpAdult extends Component {
  static navigationOptions = {
    title: 'Registro adulto',
  };

  constructor(props) {
    super(props);
    this.state = {
      username: 'AndresVilla',
      password: '123123',
      password2: '123123',
      email: 'AndresVilla@gmail.com',
      // username: '',
      // password: '',
      // password2: '',
      // fullname: '',
      // email: '',
      birthdate: '',
      errors: [],
      isLoading: false,
    };
  }

  async _createAdult() {
    if (validateForm(this.state.username, this.state.password, this.state.password2, this.state.email)) {
      try {
        this.setState({ isLoading: true })

        let response = await sendDataToSignUp(API_SIGN_UP_ADULT,
          this.state.username,
          this.state.password,
          this.state.username, // aca va fullname
          this.state.email
        )

        let status = response.status;
        console.log("res status: " + status);

        switch (status) {
          case 201:
            this.setState({ errors: [] })
            console.log("Nuevo usuario!");

            let resToken = await sendDataToLogIn(this.state.email, this.state.password)
            resToken = await resToken.json()
            let accessToken = resToken.jwt
            storeToken(accessToken);
            console.log("Access Token: " + accessToken)

            this.setState({ isLoading: false })
            this.props.navigation.navigate('HomeAdult')

            break;

          case 422:
            let res = await response.json();
            this.setState({ errors: [] })
            var properties = ["user", "email"];
            for (var i = 0; i < properties.length; i++) {
              if (res[properties[i]] != undefined) {
                console.log(res[properties[i]].toString())
                this.state.errors.push(res[properties[i]].toString())
              }
            }
            this.setState({ isLoading: false })
            break;

          default:
            break;
        }



      } catch (error) {
        this.setState({ isLoading: false })
        console.log("catch errors: " + error)
      }
    }
  };

  render() {
    if (this.state.isLoading) {
      return (
        <View>
          <View style={styles.home_TextContainer}>
            <Text style={styles.headling}>Creando usuario</Text>
            <ActivityIndicator size="large" color="#4267B2" />
          </View>
        </View>
      );
    }
    return (
      // <Container>
      <View>

        <Form style={styles.adult_TextInputContainer}>

          <Item floatingLabel style={styles.adult_TextInput}>
            <Label>Nombre de usuario</Label>
            {/* <Label style={{color: --- ,}}>Nombre de usuario</Label> */}
            <Input
              // <Input success
              maxLength={45}
              // onChangeText={(username) => this._validateUsername(username)}
              onChangeText={(username) => this.setState({ username })}
              value={this.state.username}
            />
            {/* <Icon name='checkmark-circle' /> */}
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
          <Text>{this.state.errors.toString()}</Text>
        </View>

      </View>
      // </Container>
    );
  }
}
