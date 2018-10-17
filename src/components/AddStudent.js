import React, { Component } from 'react';
import { Alert, Dimensions, StyleSheet, TouchableNativeFeedback, View, TextInput } from 'react-native';
import {Text, Button, Icon, Label, Form, Item, Input } from 'native-base';
import { DocumentPicker, ImagePicker } from 'expo'; //por usar
import styles from '../styles';

export default class AddStudent extends Component {
  static navigationOptions = {
    title: 'Añadir estudiante',
  };

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      //photo?
    };
  }

  validate(username){
      formatotexto=/^[a-zA-Z0-9]+$/;

      if(formatotexto.test(username)){
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
                <Item floatingLabel last>
                    <Label>Fotico</Label>
                    <Input
                      onChangeText={(email) => this.setState({email})}
                    />
                </Item>
              </Form>

        <View style={styles.buttonsContainer}>
            <View style={styles.button}>
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
