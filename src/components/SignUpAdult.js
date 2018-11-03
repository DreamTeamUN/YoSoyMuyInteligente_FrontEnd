import React, { Component } from 'react';
import { ActivityIndicator, Alert, View, ScrollView } from 'react-native';
import { Container, Text, Button, Icon, Label, Form, Item, Input } from 'native-base';
import axios from 'axios';
import { API_SIGN_UP_ADULT } from '../config/const';
import { validateForm } from "../utils/validations";
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
      birthdate: '',
      errors: [],
      isLoading: false,
    };
  }

  async _createAdult() {
    if (validateForm(this.state.username, this.state.password, this.state.password2, this.state.email)) {
      this.setState({ isLoading: true })
      try {
        // Axios version:
        // axios.post(API_SIGN_UP_ADULT, {
        //   "usuario": {
        //     "user": this.state.username,
        //     "password": this.state.password,
        //     "nombre": this.state.username,
        //     "email": this.state.email,
        //     "archivo_id": 0
        //   }
        // });

        // Fetch version:
        let response = await fetch(API_SIGN_UP_ADULT, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            "usuario": {
              "user": this.state.username,
              "password": this.state.password,
              "nombre": this.state.username,
              "email": this.state.email,
              "archivo_id": 0
            }
          })
        });

        // let res = await response.text();
        // console.log("res is: " + res);
        let status = response.status
        console.log("res status: " + status);

        switch (status) {
          case 201:
            this.setState({ errors: [] })
            console.log("Nuevo usuario!");
            break;

          case 422:
            let res = await response.json();

            var properties = ["user", "email"];
            for (var i = 0; i < properties.length; i++) {
              if (res[properties[i]] != undefined) {
                console.log(res[properties[i]].toString())
                this.state.errors.push(res[properties[i]].toString())
              }
            }
            break;

          default:
            break;
        }

        this.setState({ isLoading: false })

      } catch (error) {
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
