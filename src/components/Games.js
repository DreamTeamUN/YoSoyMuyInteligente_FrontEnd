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
                  style={{height: 200, width: 200}}
                  source={{uri: 'https://st2.depositphotos.com/1742172/5445/v/950/depositphotos_54453599-stock-illustration-cartoon-ostrich.jpg'}}
                />
              </Body>
            </CardItem>
            <CardItem footer>
              <Button transparent info  onPress={() => Alert.alert('DisplayGame3')}>
            <Text>¡Quiero jugar!</Text>
          </Button>
            </CardItem>
        </Card>

      </Content>
    );
  }
}
