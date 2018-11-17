import React, { Component } from 'react';
import { View, Image } from 'react-native';
import Expo from "expo";
import { Button, Icon, Text } from 'native-base';
import styles from '../styles';

export default class Main extends Component {

  constructor(props) {
    super(props);
  }

  async _signIn() {
    try {
      const result = await Expo.Google.logInAsync({
        androidClientId:
          "99894503572-hi17jagkv4uc28222pdl9eki2n2rsovf.apps.googleusercontent.com",
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
            <Button iconLeft rounded style={styles.buttonfb}
              onPress={this._logIn}>
              <Icon type="EvilIcons" name="sc-facebook" />
              <Text >Iniciar con Facebook</Text>
            </Button>
          </View>


          <View>
            <Button iconLeft rounded style={styles.buttondark}
              onPress={() => this.props.navigation.navigate('LogIn')}>
              <Icon name="person" />
              <Text>Iniciar Sesión con correo</Text>
            </Button>
          </View>
        </View>
      </View>
    );
  }
}
