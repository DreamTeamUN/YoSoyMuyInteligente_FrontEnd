import React, { Component } from 'react';
import { Alert, StyleSheet, TouchableNativeFeedback, View, ScrollView, Image } from 'react-native';
import {Text, Button, Icon, Card, CardItem, Body, Left, Right, Thumbnail, Content } from 'native-base';
import styles from '../styles';

export default class Juegos extends Component {

  render() {
    return (
      <Content style = {{margin: 10}}>
        <Card>
            <CardItem header>
              <Text>Encontrar parejas (palabra/sonido)</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Image
                  style={{flex:1, height: undefined, width: undefined}}
                  resizeMode="contain"
                  source={{uri: 'https://www.frikids.com/wp-content/uploads/2015/04/parejaslearn2.jpeg'}}
                />
              </Body>
            </CardItem>
            <CardItem footer>
              <Button transparent info  onPress={() => Alert.alert('DisplayGame1')}>
            <Text>¡Quiero jugar!</Text>
          </Button>
            </CardItem>
         </Card>

         <Card>
             <CardItem header>
               <Text>Encontrar parejas (palabra/imagen)</Text>
             </CardItem>
             <CardItem>
               <Body>
                 <Image
                   style={{width: 100, height: 100}}
                   source={{uri: 'http://jonsegador.com/wp-content/uploads/2014/07/parejas-3.png'}}
                 />
               </Body>
             </CardItem>
             <CardItem footer>
               <Button transparent info  onPress={() => Alert.alert('DisplayGame1')}>
             <Text>¡Quiero jugar!</Text>
           </Button>
             </CardItem>
          </Card>


          <Card>
              <CardItem header>
                <Text>Enlazar Palabras con su Imagen</Text>
              </CardItem>
              <CardItem>
                <Body>
                  <Image
                    style={{width: 100, height: 100}}
                    source={{uri: 'https://st2.depositphotos.com/1742172/5445/v/950/depositphotos_54453599-stock-illustration-cartoon-ostrich.jpg'}}
                  />
                </Body>
              </CardItem>
              <CardItem footer>
                <Button transparent info  onPress={() => Alert.alert('DisplayGame1')}>
              <Text>¡Quiero jugar!</Text>
            </Button>
              </CardItem>
           </Card>

      </Content>
    );
  }
}
