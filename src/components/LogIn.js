import React, { Component } from 'react';
import { View, Switch, AsyncStorage } from 'react-native';
import { Text, Button, Icon, Label, Form, Item, Input } from 'native-base';
import styles from '../styles';

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
      rememberMe: false
    };
  }

  toggleSwitch() {
    this.setState({ rememberMe: !this.state.rememberMe });
  }

  _sendData() {
    const arrayData = [];

    const data = {
      username: this.state.username,
      password: this.state.password
    }
    arrayData.push(data);
    try {
      AsyncStorage.getItem('database_form')
        .then((value) => {
          if (value != null) { // hay datos en database_form
            AsyncStorage.clear()
            
            const d = JSON.parse(value);
            d.push(data)
            AsyncStorage.setItem('database_form', JSON.stringify(d))
              .then(() => {
                this.props.navigation.navigate('HomeAdult')
              })
          } else { // primera vez que entraran datos
            AsyncStorage.setItem('database_form', JSON.stringify(arrayData))
              .then(() => {
                this.props.navigation.navigate('HomeAdult')
              })
          }
        })
    } catch (error) {
      console.log(error)
    }

  }

  render() {
    return (
      <View>
        <Form style={styles.adult_TextInputContainer}>

          <Item floatingLabel style={styles.adult_TextInput}>
            <Label>Nombre de usuario</Label>
            <Input
              maxLength={45}
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

        <View style={styles.homeAdult_buttonsContainer}>
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
