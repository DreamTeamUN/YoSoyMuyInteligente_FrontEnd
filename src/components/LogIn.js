import React, { Component } from 'react';
import { View, Switch, AsyncStorage, Image } from 'react-native';
import { Text, Button, Icon, Label, Form, Item, Input } from 'native-base';
import { API_LOG_IN } from '../config/const';
import styles from '../styles';

const ACCESS_TOKEN = 'access_token';

export default class LogIn extends Component {
  static navigationOptions = {
    title: 'Iniciar sesión',
  };

  constructor(props) {
    super(props);
    this.toggleSwitch = this.toggleSwitch.bind(this);
    this.state = {
      username: '',
      password: '',
      rememberMe: false,
      error: '',
    };
  }

  toggleSwitch() {
    this.setState({ rememberMe: !this.state.rememberMe });
  }

  async _storeToken(accessToken) {
    try {
      await AsyncStorage.setItem(ACCESS_TOKEN, accessToken);
      this._getToken();
    } catch (error) {
      console.log("Something went wrong")
    }
  }

  async _getToken() {
    try {
      let token = await AsyncStorage.getItem(ACCESS_TOKEN);
      console.log("_getToken | token is: " + token)
    } catch (error) {
      console.log("Something went wrong")
    }
  }

  async _removeToken() {
    try {
      await AsyncStorage.removeItem(ACCESS_TOKEN);
      this._getToken();
    } catch (error) {
      console.log("_removeToken | Something went wrong")
    }
  }

  async _sendData() {
    // const arrayData = [];

    // const data = {
    //   username: this.state.username,
    //   password: this.state.password
    // }
    // arrayData.push(data);
    // try {
    //   AsyncStorage.getItem('database_form')
    //     .then((value) => {
    //       if (value != null) { // hay datos en database_form
    //         // AsyncStorage.clear()

    //         const d = JSON.parse(value);
    //         d.push(data)
    //         AsyncStorage.setItem('database_form', JSON.stringify(d))
    //           .then(() => {
    //             this.props.navigation.navigate('HomeAdult')
    //           })
    //       } else { // primera vez que entraran datos
    //         AsyncStorage.setItem('database_form', JSON.stringify(arrayData))
    //           .then(() => {
    //             this.props.navigation.navigate('HomeAdult')
    //           })
    //       }
    //     })
    // } catch (error) {
    //   console.log(error)
    // }

    try {
      // Fetch version:
      let response = await fetch(API_LOG_IN, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "auth": {
            "email": this.state.email,
            "password": this.state.password,
          }
        })
      });

      // let res = await response.json();
      // console.log("res: " + res.jwt)
      // console.log("jwt: " + response.text().json().jwt);
      // let responseJson = await response.json();
      // console.log("jwt is " + responseJson.jwt)

      if (response.status >= 200 && response.status < 300) {
        // Success
        let res = await response.json();
        this.setState({ error: "" })
        let accessToken = res.jwt
        this._storeToken(accessToken);
        console.log("Access Token: " + accessToken)
        this.props.navigation.navigate('HomeAdult')
      } else {
        // Error
        // let error = res;
        // throw error;
        this._removeToken()
        this.setState({ error: "Algo salio mal" })
      }

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

        <View>
        <Button iconLeft rounded style={styles.buttonred}
        onPress={() => this.props.navigation.navigate('HomeAdult')}>
        <View>
        <Image style={styles.googleIconViewStyle} source={require('../assets/googlelettericon.png')} />
        </View>
             <Text >Google</Text>
       </Button>
       </View>

       <View>
       <Button iconLeft rounded style={styles.buttonfb}
       onPress={() => this.props.navigation.navigate('LogIn')}>
       <View>
       <Image style={styles.fbIconViewStyle} source={require('../assets/facebooklettericon.png')} />
       </View>
            <Text >Facebook</Text>
      </Button>
      </View>

          <View>
            <Button iconLeft rounded style={styles.buttonclear}
              onPress={() => this._sendData()}>
              <Icon type="MaterialIcons" name="done" />
              <Text>Enviar</Text>
            </Button>
          </View>
          <Text>{this.state.error}</Text>
        </View>


      </View>
    );
  }
}
