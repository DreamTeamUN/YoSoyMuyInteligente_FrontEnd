import React, { Component } from 'react';
import { Alert, StyleSheet, TouchableNativeFeedback, View, ScrollView, Image } from 'react-native';
import {Text, Button, Icon, Card, CardItem, Body, Left, Right, Thumbnail, Content } from 'native-base';
import styles from '../styles';

export default class Games extends Component {

  render() {
    return (
      <Content style = {{margin: 10}}>
        <Card>
            <CardItem header>
              <Text>Enlazar Palabras con su Imagen</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Image
                  style={styles.imagenCardview}
                  source={{uri: 'https://images.vexels.com/media/users/17482/105815/preview2/3732f81f4bc3d33fdbf1a8e3c180c70d-animal-lindo-del-dibujo-animado.png'}}
                />
              </Body>
            </CardItem>
            <CardItem footer>
              <Button transparent info  onPress={() => this.props.navigation.navigate('PalabraImagen')}>
            <Text>¡Quiero jugar!</Text>
          </Button>
            </CardItem>
        </Card>

      </Content>
    );
  }
}
