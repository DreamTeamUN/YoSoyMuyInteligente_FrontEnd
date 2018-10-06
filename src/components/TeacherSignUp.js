import React, { Component } from 'react';
import { Alert, Dimensions, StyleSheet, TouchableNativeFeedback, TextInput, View, ScrollView } from 'react-native';
import {Text, Button} from 'react-native-paper';
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
          <TextInput
            style={styles.adult_TextInput}
            secureTextEntry={true}
            placeholder="Repetir contraseña"
            onChangeText={(password2) => this.setState({ password2 })}
          />
          <TextInput
            style={styles.adult_TextInput}
            placeholder="Correo electronico"
            onChangeText={(email) => this.setState({ email })}
          />

          {/* <Text style={{padding: 10, fontSize: 20}}>
          {this.state.email}
        </Text> */}
        </View>

        <View style={styles.buttonsContainer}>
            <View style={[styles.button, styles.buttonBlueA]}>
              <Button
                mode="contained"
                icon="group-add"
                onPress={() => Alert.alert('Crear aula')}>
                Crear Aula</Button>
            </View>


            <View style={[styles.button, styles.buttonBlueB]}>
              <Button
                mode="contained"
                icon="done" //outline?
                color='#90CAF9'
                onPress={() => Alert.alert('Finalizar registro')}>
                Finalizar Registro</Button>
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
