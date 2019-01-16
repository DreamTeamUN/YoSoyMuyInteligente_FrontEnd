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
      boton1: styles.buttonjuego,
      boton2: styles.buttonjuego,
      boton3: styles.buttonjuego,
    };
    this.selectionOnPress = this.selectionOnPress.bind(this);
  }

  selectionOnPress(seleccion) {
 
    switch (seleccion) {
      case "uno":
        this.setState({ 
          boton1: styles.buttonjuegowin,
          boton2: styles.buttonjuegofail,
          boton3: styles.buttonjuegofail
        });
        break;
      case "dos":
        this.setState({ 
          boton1: styles.buttonjuegofail,
          boton2: styles.buttonjuegowin,
          boton3: styles.buttonjuegofail
        });
        break;

      case "tres":
        this.setState({ 
          boton1: styles.buttonjuegofail,
          boton2: styles.buttonjuegofail,
          boton3: styles.buttonjuegowin
        });
        break;

      default:
        break;
    }
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

        <Button block rounded style = {this.state.boton1}
          onPress={() => this.selectionOnPress("uno")}>
          <Text style={styles.textoOpcion}>Opción #1</Text>          
        </Button>

        <Button block rounded style={this.state.boton2}
          onPress={() => this.selectionOnPress("dos")}>
          <Text style={styles.textoOpcion}>Opción #2</Text>
        </Button>

        <Button block rounded style={this.state.boton3}
          onPress={() => this.selectionOnPress("tres")}>
          <Text style={styles.textoOpcion}>Opción #3</Text>
        </Button>

        </Content>
      </Container>
    );
  }
}
