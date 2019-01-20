import React, { Component } from 'react';
import { Alert, Image } from 'react-native';
import {Text, Button, Container, Content, Header, View,
  Icon, Body, Title, Left, StyleProvider} from 'native-base';
import styles from '../styles';
import {idNivel} from './NivelesPalabraImagen'
import {getID} from '../utils/home';
import {API, API_JUEGO_PALABRA_IMG} from '../config/const'

export default class PalabraImagen extends Component {

  static navigationOptions = {
    header: null
  }

  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      idUsuario: '',
      boton1: styles.buttonjuego,
      boton2: styles.buttonjuego,
      boton3: styles.buttonjuego,
      nivel: [],
      imagen: '',
      opcion1: '',
      opcion2: '',
      opcion3: '',
      opcionCorrecta: '',
      subnivel: 0,
      puntuacion: 0,
    };
    this.cambiarColorBotones = this.cambiarColorBotones.bind(this);
    this.evaluarOpcion = this.evaluarOpcion.bind(this);
  }

  async componentWillMount(){
    
    this.setState({isLoading: true});

    getID()
    .then(id => {
      this.setState({
        idUsuario: id,
      })
    })
    .then(() => {
        this.getNivel()
    })
  }

  cambiarColorBotones(seleccion) {
 
    switch (seleccion) {
      case this.state.opcion1:
        this.setState({ 
          boton1: styles.buttonjuegowin,
          boton2: styles.buttonjuegofail,
          boton3: styles.buttonjuegofail
        });
        break;
      case this.state.opcion2:
        this.setState({ 
          boton1: styles.buttonjuegofail,
          boton2: styles.buttonjuegowin,
          boton3: styles.buttonjuegofail
        });
        break;

      case this.state.opcion3:
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

  async getNivel (){
    
    const URL = API_JUEGO_PALABRA_IMG.concat("/" + idNivel).concat("/3").concat("/3");

    try {
      const response = await fetch(URL);
      const responseJson = await response.json();

      this.setState({
        nivel: responseJson,
      });
      await this.renderNivel()
      this.setState({
        isLoading: false
      })
    }
    catch (error) {
      console.error("Error en la consulta de lecciones: " + error);
      this.setState({isLoading: false});
    }
  }

  async renderNivel(){
    
    var juego = "Juego".concat(this.state.subnivel);
    this.setState({
      imagen: API.concat(this.state.nivel[juego].url),
      opcion1: this.state.nivel[juego].opciones[0].frase,
      opcion2: this.state.nivel[juego].opciones[1].frase,
      opcion3: this.state.nivel[juego].opciones[2].frase,
      opcionCorrecta: this.state.nivel[juego].correcta,
    })
  }

  evaluarOpcion(opcion){

    if (this.state.opcionCorrecta == opcion) {
      this.setState({
        puntuacion: this.state.puntuacion + 10,
      })
      this.cambiarColorBotones(opcion);
    } else {
      this.cambiarColorBotones(opcion);
    }
  }

  render() {

    if (this.state.isLoading) {
      return (
        <View>
          <View style={styles.home_TextContainer}>
            <Text style={styles.headling}>Cargando...</Text>
          </View>
        </View>
      );
    }

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
            source={{uri: this.state.imagen}}
          />

          <Button block rounded style = {this.state.boton1}
            onPress={() => this.evaluarOpcion(this.state.opcion1)}>
            <Text style={styles.textoOpcion}>
              {this.state.opcion1}
            </Text>          
          </Button>

          <Button block rounded style={this.state.boton2}
            onPress={() => this.evaluarOpcion(this.state.opcion2)}>
            <Text style={styles.textoOpcion}>
              {this.state.opcion2}
            </Text>
          </Button>

          <Button block rounded style={this.state.boton3}
            onPress={() => this.evaluarOpcion(this.state.opcion3)}>
            <Text style={styles.textoOpcion}>
              {this.state.opcion3}
            </Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
