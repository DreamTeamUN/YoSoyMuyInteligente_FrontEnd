import React, { Component } from 'react';
import { ActivityIndicator, Switch, AsyncStorage, Image } from 'react-native';
import { View, Text, Button, Icon, Label, Form, Item, Input } from 'native-base';
// import { API_LOG_IN } from '../config/const';
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
      email: 'Veneco@gmail.com',
      password: '123123',
      // email: '',
      // password: '',
      rememberMe: false,
      error: '',
      signedIn: false,
      name: '',
      photoUrl: '',
      isLoading: false,
    };
  }

  async _signIn() {
    try {
      const result = await Expo.Google.logInAsync({
        androidClientId:
          "99894503572-hi17jagkv4uc28222pdl9eki2n2rsovf.apps.googleusercontent.com",
        //iosClientId: YOUR_CLIENT_ID_HERE,  <-- if you use iOS
        scopes: ["profile", "email"]
      })
      console.log(result)
      if (result.type === "success") {
        this.setState({
          signedIn: true,
          name: result.user.name,
          photoUrl: result.user.photoUrl
        })
      } else {
        console.log("Google | Cancelled")
      }
    } catch (e) {
      console.log("error", e)
    }
  }

  async _logIn() {
    const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync(
      "769489916725698",
      {
        permissions: ["public_profile", "email", "user_birthday"]
      }
    );
    if (type === "success") {
      // Handle successful authentication here
      const response = await fetch(
        `https://graph.facebook.com/me?access_token=${token}&fields=id,name,birthday,email,picture.type(large)`
      );
      const { picture, name, birthday, email } = await response.json();
      console.log(name, email, birthday)
    } else {
      console.log("Facebook | Cancelled")
    }
  }

  toggleSwitch() {
    this.setState({ rememberMe: !this.state.rememberMe });
  }

  async _sendData() {

    try {
      // this.setState({ isLoading: true })
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
    // if (this.state.isLoading) {
    //   return (
    //     <View>
    //       <View style={styles.home_TextContainer}>
    //         <Text style={styles.headling}>Cargando</Text>
    //         <ActivityIndicator size="large" color="#4267B2" />
    //       </View>
    //     </View>
    //   );
    // }
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
            <Button iconLeft rounded style={styles.buttonred}
              onPress={() => this._signIn()}>
              <Icon type="FontAwesome" name="google" />
              <Text >Google</Text>
            </Button>
          </View>

          <View>
            <Button iconLeft rounded style={styles.buttonfb}
              onPress={this._logIn}>
              <Icon type="EvilIcons" name="sc-facebook" />
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
        </View>


      </View>
    );
  }
}
