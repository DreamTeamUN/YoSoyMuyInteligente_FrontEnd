import React, { Component } from 'react';
import { Alert, Dimensions, StyleSheet, TouchableNativeFeedback, View, ScrollView, TextInput } from 'react-native';
import {Text, Button, Icon, Label, Form, Item, Input } from 'native-base';
import styles from '../styles';

export default class TeacherSignUp extends Component {
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

  render() {
    return (
      <ScrollView>

        <Form style={styles.adult_TextInputContainer}>
              <Item floatingLabel>
                    <Label>Nombre de usuario</Label>
                    <Input
                    style={styles.adult_TextInput}
                    maxLength={45}
                    onChangeText={(username) => this.setState({ username })}
                     />
                  </Item>
                <Item floatingLabel>
                        <Label>Contraseña</Label>
                        <Input
                        onChangeText={(password) => this.setState({ password })}
                        secureTextEntry={true}/>
                </Item>
                <Item floatingLabel>
                            <Label>Repita su contraseña</Label>
                            <Input
                              onChangeText={(password2) => this.setState({ password2 })}
                              secureTextEntry={true}/>
                </Item>
                <Item floatingLabel last>
                    <Label>Correo electrónico</Label>
                    <Input
                      onChangeText={(email) => this.setState({ email })}
                    />
                </Item>
              </Form>

        <View style={styles.buttonsContainer}>
            <View style={styles.button}>
              <Button iconLeft rounded style = {styles.buttonclear} onPress={() => Alert.alert('Crear aula')}>
                  <Icon type="MaterialIcons" name="group-add" />
                  <Text>Crear Aula</Text>
              </Button>
            </View>


            <View style={styles.button}>
              <Button iconLeft rounded style = {styles.buttondark} onPress={() => Alert.alert('Crear aula')}>
                  <Icon type="MaterialIcons" name="done" />
                  <Text>Finalizar Registro</Text>
              </Button>
            </View>
        </View>

      </ScrollView>
    );
  }
}

// const styles = StyleSheet.create({
//   nombre: {
//     atributo: valor,
//   },
// });
