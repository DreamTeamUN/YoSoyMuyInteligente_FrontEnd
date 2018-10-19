import React, { Component } from 'react';
import { Alert, View, TextInput } from 'react-native';
import {Text, Button, Icon, Label, Form, Item, Input } from 'native-base';
import styles from '../styles';

export default class SignUpTeacher extends Component {
  static navigationOptions = {
    title: 'Registro docente',
  };

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      password2: '',
      email: '',
      telephone: ''
    };
  }


  validate(username, password, password2, email){
      formatotexto=/^[a-zA-Z0-9]+$/;
      formatomail=/\S+@\S+\.\S+/;

      if(formatotexto.test(username)
      && formatomail.test(email)
      && password==password2
      && password.length >= 6){
            Alert.alert('El formulario fue llenado correctamente.');
      }else{
            Alert.alert('Hay errores en el formulario.');
      }
  }

  render() {
    return (
      <View>

        <Form style={styles.adult_TextInputContainer}>
              <Item floatingLabel>
                    <Label>Nombre de usuario</Label>
                    <Input
                    maxLength={45}
                    onChangeText={
                    (username) => this.setState({username})}
                     />
                  </Item>
                <Item floatingLabel>
                        <Label>Contraseña</Label>
                        <Input
                        onChangeText={
                          (password) => this.setState({password})}
                        secureTextEntry={true}/>
                </Item>
                <Item floatingLabel>
                            <Label>Repita su contraseña</Label>
                            <Input
                              onChangeText={(password2) => this.setState({password2})}
                              secureTextEntry={true}/>
                </Item>
                <Item floatingLabel last>
                    <Label>Correo electrónico</Label>
                    <Input
                      onChangeText={(email) => this.setState({email})}
                    />
                </Item>
              </Form>

        <View style={styles.buttonsContainer}>
          <View>
              <Button iconLeft rounded style = {styles.buttonclear} onPress={() => Alert.alert('Pantalla faltante')}>
                  <Icon type="MaterialIcons" name="group-add" />
                  <Text>Crear Aula (PF)</Text>
              </Button>
          </View>
          <View>
            <Button iconLeft rounded style = {styles.buttondark} onPress={() =>
                this.validate(this.state.username, this.state.password, this.state.password2, this.state.email)}>
                  <Icon type="MaterialIcons" name="done" />
                  <Text>Finalizar Registro</Text>
            </Button>
              </View>
        </View>
      </View>
    );
  }
}
