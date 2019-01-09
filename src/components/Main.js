import React, { Component } from 'react';
import { View, Image } from 'react-native';
import Expo from "expo";
import { Button, Icon, Text } from 'native-base';
import { sendDataToLogIn, storeToken, getToken, removeToken, sendDataToSocials } from '../utils/logIn';
import styles from '../styles';

export default class Main extends Component {

  constructor(props) {
    super(props);
  }

  async _signIn() {
    try {
      const result = await Expo.Google.logInAsync({
        //behavior: "web",
        scopes: ["profile", "email"],
        androidClientId: "99894503572-icicblji5ltq53l8acdcpfs78hkgg4t9.apps.googleusercontent.com",
        androidStandaloneAppClientId: "99894503572-68s54laf0toc0c2orjdjt6u2cablrfvr.apps.googleusercontent.com",
        webClientId: "99894503572-icicblji5ltq53l8acdcpfs78hkgg4t9.apps.googleusercontent.com",
      })
      if (result.type === "success"){

        console.log(result);
        let response = await sendDataToSocials(result.user.name, result.user.email, 1, result.accessToken)
        let res = await response.json();
        storeToken(res.jwt);
        this.props.navigation.navigate('HomeAdult')
      }else {
        console.log("Google | Cancelled")
      }
    } catch (e) {
      console.log("error con google autenticathor: ", e)
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
      const response = await fetch(
        `https://graph.facebook.com/me?access_token=${token}&fields=id,name,birthday,email,picture.type(large)`
      );
      const { picture, name, birthday, email } = await response.json();
      console.log(name, email, birthday)
    } else {
      console.log("Facebook | Cancelled")
    }
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
        <View style={styles.imageContainer}>
          <Image style={styles.logoinicial} source={require('../assets/logoinicial.png')} />
        </View>

        <View style={styles.buttonsContainer}>
          <View><Button iconLeft rounded style={styles.buttonclear}
            onPress={() => this.props.navigation.navigate('SignUpMain')}>
            <Icon name="person-add" />
            <Text>Registrar con correo</Text>
          </Button>
          </View>

          <View>
            <Button iconLeft rounded style={styles.buttonred}
              onPress={() => this._signIn()}>
              <Icon type="FontAwesome" name="google" />
              <Text >Iniciar con Google</Text>
            </Button>
            </View>

          <View>
            <Button iconLeft rounded style={styles.buttondark}
              onPress={() => this.props.navigation.navigate('LogIn')}>
              <Icon name="person" />
              <Text>Iniciar sesión con correo</Text>
            </Button>
          </View>
        </View>
      </View>
    );
  }
}
