import React, { Component } from 'react';
import { Alert, StyleSheet, TouchableNativeFeedback, View, Switch, TextInput } from 'react-native';
import {Container, Header, Content,Text,List, ListItem} from 'native-base';
import styles from '../styles';


export default class Practicas extends Component {

  render() {
    var items = [
          'Practica 1',
          'Practica 2',
          'Practica 3',
          'Practica 4',
          'Practica 5',
          'Practica 6',
          'Practica 7',
          'Practica 8',
          'Practica 9',
          'Practica 10'
        ];
    return (
      <Container>
        <Content>
          <List dataArray={items}
            renderRow={(item) =>
              <ListItem>
                <Text>{item}</Text>
              </ListItem>
            }>
          </List>
        </Content>
      </Container>
    );
  }
}
