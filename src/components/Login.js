import React from 'react';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  _onPressButton() {
    Alert.alert('You tapped the button!')
  }
  
  register() {
    Alert.alert('Registro!')
  }
  
  logIn() {
    Alert.alert('Inicio de sesion')
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Segundo commit. Yo Soy Muy Inteligente.</Text>
        <Text>Todos los derechos reservados.</Text>

        <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressButton}
            title="Press Me"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    margin: 20
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
