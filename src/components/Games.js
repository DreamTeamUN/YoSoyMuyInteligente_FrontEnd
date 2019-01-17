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
                  source={require('../assets/juego1.png')}
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
