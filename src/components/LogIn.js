import React, { Component } from 'react';
import { View, Switch } from 'react-native';
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
      rememberMe: false,
    };
  }

  toggleSwitch() {
    this.setState({ rememberMe: !this.state.rememberMe });
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
            />
          </Item>

          <Item floatingLabel style={styles.adult_TextInput}>
            <Label>Contraseña</Label>
            <Input
              onChangeText={(password) => this.setState({ password })}
              secureTextEntry={true} />
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
              onPress={() => this.props.navigation.navigate('HomeAdult')}>
              <Icon type="MaterialIcons" name="done" />
              <Text>Enviar</Text>
            </Button>
          </View>
        </View>

      </View>
    );
  }
}
