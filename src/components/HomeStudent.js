import React, { Component } from 'react';
import { View, Image } from 'react-native';
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

          <Image style={styles.imagenJuego} source={require('../assets/bienvenido.png')} />
        <View style={styles.viewButtonHome}>
          <Button full iconLeft rounded style={styles.buttondark}
            onPress={() => this.props.navigation.navigate('Practices')}>
            <Icon name="apps" />
            <Text>Progreso Semanas</Text>
          </Button>
          </View>

          <View style={styles.viewButtonHome}>
          <Button full iconLeft rounded style={styles.buttonclear}
            onPress={() => this.props.navigation.navigate('Games')}>
            <Icon type="MaterialIcons" name="videogame-asset" />
            <Text>Juegos</Text>
          </Button>
          </View>

        </Content>
      </Container>
    );
  }
}
