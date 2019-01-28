import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { API } from '../config/const';
import {Text, Button, Container, Content, Header,
  Icon, Body, Title, Left} from 'native-base';
import styles from '../styles';

export default class HomeStudent extends Component {

  static navigationOptions = {
    header: null
  }

  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
    };
  }

  async componentWillMount() {
    await this.listarFrasesPNL()
  }

  generateRandomNumber(min, max) {
   let random_number = Math.random() * (max-min) + min;
    return Math.floor(random_number);
  }

  async listarFrasesPNL() {

    this.setState({isLoading: true});
    const URL = API.concat("/tipo_usuarios/").concat(3).concat("/frase_pnls");
    console.log("URL estudiante: " + URL)
    try {
      const response = await fetch(URL);
      const responseJson = await response.json();

      this.setState({
        frases: responseJson,
        fraseseleccionada: responseJson[this.generateRandomNumber(0, responseJson.length)].frase, //imprimir más
      });
      console.log(this.state.fraseseleccionada);
    }
    catch (error) {
      console.error("Error en la consulta: " + error);
      this.setState({isLoading: false});
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
            <Title>Estudiantes Home</Title>
          </Body>

        </Header>


        <Content style = {styles.maxHeight} contentContainerStyle= {styles.centerImage}>
          <Image style={styles.imagenBienvenidaEstudiante} source={require('../assets/bienvenido.png')} />
          <Text style={styles.frasePNLEstudiante}>“{this.state.fraseseleccionada}”</Text>
        <View style={styles.viewButtonHome}>
          <Button full iconLeft rounded style={styles.buttondark}
            onPress={() => this.props.navigation.navigate('Practices')}>
            <Icon name="apps" />
            <Text style={{flex: 1}}>Progreso Semanas</Text>
          </Button>
          </View>

          <View style={styles.viewButtonHome}>
          <Button full iconLeft rounded style={styles.buttonclear}
            onPress={() => this.props.navigation.navigate('Games')}>
            <Icon type="MaterialIcons" name="videogame-asset" />
            <Text style={{flex: 1}}>Juegos</Text>
          </Button>
          </View>

        </Content>
      </Container>
    );
  }
}
