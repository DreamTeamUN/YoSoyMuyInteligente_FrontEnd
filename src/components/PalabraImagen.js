import React, { Component } from 'react';
import { Alert, Image } from 'react-native';
import {Text, Button, Container, Content, Header,
  Icon, Body, Title, Left, StyleProvider} from 'native-base';
import styles from '../styles';

export default class PalabraImagen extends Component {

  static navigationOptions = {
    header: null
  }

  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
    };
  }

  render() {
    return (
      <Container>
        <Header style = {styles.headerStyle}>

          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>

          <Body>
            <Title>Juego Palabra/Imagen</Title>
          </Body>

        </Header>

        <Content style = {styles.maxHeight} contentContainerStyle={styles.centerImage}>


        <Image
          style={styles.imagenJuego}
          source={{uri: 'https://www.himgs.com/imagenes/hola/comunes/hola-2017.gif'}}
        />

        <Button block rounded style={styles.buttonjuego}
          onPress={() => Alert.alert("Holi")}>
          <Text style={styles.textoOpcion}>Opción #1</Text>
        </Button>

          <Button block rounded style={styles.buttonjuegowin}
            onPress={() => Alert.alert("Holi")}>
            <Text style={styles.textoOpcion}>Opción #2</Text>
          </Button>

          <Button block rounded style={styles.buttonjuegofail}
            onPress={() => Alert.alert("Holi")}>
            <Text style={styles.textoOpcion}>Opción #3</Text>
          </Button>

        </Content>
      </Container>
    );
  }
}
