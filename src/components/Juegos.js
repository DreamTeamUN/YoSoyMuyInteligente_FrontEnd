import React, { Component } from 'react';
import { Alert, StyleSheet, TouchableNativeFeedback, View, ScrollView, Image } from 'react-native';
import {Text, Button, Icon, Card, CardItem, Body, Left, Right, Thumbnail} from 'native-base';
import styles from '../styles';

export default class Juegos extends Component {

  render() {
    return (
      <View>
        <Card style = {{margin: 15, borderRadius:5}}>
            <CardItem header>
              <Text>Palabra - Imagen</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Image
                  style={{width: 200, height: 150}}
                  source={{uri: 'https://st2.depositphotos.com/1742172/5445/v/950/depositphotos_54453599-stock-illustration-cartoon-ostrich.jpg'}}
                />
              </Body>
            </CardItem>
            <CardItem footer>
              <Text>GeekyAnts</Text>
            </CardItem>
         </Card>
      </View>
    );
  }
}
