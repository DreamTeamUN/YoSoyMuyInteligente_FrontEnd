import React, { Component } from 'react';
import { ActivityIndicator, Switch, AsyncStorage, Image } from 'react-native';
import { View, Text, Button, Icon, Label, Form, Item, Input } from 'native-base';
import { sendDataToLogIn, storeToken, getToken, removeToken } from '../utils/logIn';
import styles from '../styles';
import Expo from "expo";

export default class LogIn extends Component {
  static navigationOptions = {
    title: 'Iniciar sesión',
  };

  constructor(props) {
    super(props);
    this.toggleSwitch = this.toggleSwitch.bind(this);
    this.state = {
      email: 'AVN@gmail.com',
      password: '123123',
      rememberMe: false,
      error: '',
      signedIn: false,
      name: '',
      photoUrl: '',
      isLoading: false,
    };
  }

  toggleSwitch() {
    this.setState({ rememberMe: !this.state.rememberMe });
  }

  async _sendData() {

    try {
      let response = await sendDataToLogIn(this.state.email, this.state.password)

      console.log("login | res status: " + response.status)

      if (response.status >= 200 && response.status < 300) {
        // Success
        let res = await response.json();
        this.setState({ error: "" })
        let accessToken = res.jwt
        storeToken(accessToken);
        console.log("Access Token: " + accessToken)
        this.props.navigation.navigate('HomeAdult')
      } else {
        // Error
        // let error = res;
        // throw error;
        removeToken()
        this.setState({ error: "Algo salio mal" })
      }
      // this.setState({ isLoading: false })
    } catch (error) {
      // this._removeToken()
      this.setState({ error: error })
      console.log("error: " + error)
    }
  }

  render() {
    return (
      <View>
        <Form style={styles.adult_TextInputContainer}>

          <Item floatingLabel style={styles.adult_TextInput}>
            <Label>Correo electronico</Label>
            <Input
              maxLength={45}
              onChangeText={(email) => this.setState({ email })}
              value={this.state.email}
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

          <View style={styles.login_Toggle}>
            <Text style={styles.login_ToggleText}>
              Recordar usuario
            </Text>
            <Switch
              onValueChange={this.toggleSwitch}
              value={this.state.rememberMe}
            />
          </View>

        </Form>

        <View style={styles.login_buttonsContainer}>
          <Text>{this.state.error}</Text>

          <View>
            <Button iconLeft rounded style={styles.buttonclear}
              onPress={() => this._sendData()}>
              <Icon type="MaterialIcons" name="done" />
              <Text>Enviar</Text>
            </Button>
          </View>
        </View>
      </View>
    );
  }
}
