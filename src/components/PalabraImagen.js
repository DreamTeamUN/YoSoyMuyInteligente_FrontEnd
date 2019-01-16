import React, { Component } from 'react';
import { Alert, Image } from 'react-native';
import {Text, Button, Container, Content, Header,
  Icon, Body, Title, Left} from 'native-base';
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


        <Button full iconLeft rounded style={styles.buttonjuego}
          onPress={() => Alert.alert("Holi")}>
          <Text>Opción #1</Text>
        </Button>

          <Button full iconLeft rounded style={styles.buttonjuego}
            onPress={() => Alert.alert("Holi")}>
            <Text>Opción #2</Text>
          </Button>

          <Button full iconLeft rounded style={styles.buttonjuego}
            onPress={() => Alert.alert("Holi")}>
            <Text>Opción #3</Text>
          </Button>

        </Content>
      </Container>
    );
  }
}
