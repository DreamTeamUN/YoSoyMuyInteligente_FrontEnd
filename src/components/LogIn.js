import React, { Component } from 'react';
import { Alert, StyleSheet, TouchableNativeFeedback, View, Switch, TextInput } from 'react-native';
import {Text, Button, Icon} from 'native-base';
import styles from '../styles';

export default class LogIn extends Component {
  // static navigationOptions = {
  //   title: 'Titulo',
  // };

  constructor(props) {
    super(props);
    this.toggleSwitch = this.toggleSwitch.bind(this);
    this.state = {
      username: '',
      password: '',
      rememberMe: false,
    };
  }

  toggleSwitch() {
    this.setState({ rememberMe: !this.state.rememberMe });
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
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ padding: 10, fontSize: 20 }}>
              Recordar usuario
            </Text>
            <Switch
              onValueChange={this.toggleSwitch}
              value={this.state.rememberMe}
            />
          </View>

          {/* <Text style={{ padding: 10, fontSize: 20 }}>
            {this.state.rememberMe.toString()}
          </Text> */}
        </View>

        <View style={styles.buttonsContainer}>
            <View style={styles.button}>
              <Button iconLeft rounded style = {styles.buttonclear} onPress={() => this.props.navigation.navigate('Home')}>
                  <Icon type="MaterialIcons" name="done" />
                  <Text>Enviar</Text>
              </Button>
            </View>
        </View>

      </View>
    );
  }
}
