import React, { Component } from 'react';
import { Alert, StyleSheet, TouchableNativeFeedback, View, Switch, TextInput } from 'react-native';
import {Container, Header, Content,Text,List, ListItem, Button} from 'native-base';
import styles from '../styles';


export default class Practices extends Component {

  render() {
    return (
      <Container>
        <Content>
          <View style={styles.menupracticas}>
          <View style={styles.button}>
            <Button style = {styles.buttonclear} onPress={() => this.props.navigation.navigate('Sentence')}>
                <Text style = {styles.numbers}>#1</Text>
            </Button>
          </View>

          <View style={styles.button}>
            <Button style = {styles.buttondark} onPress={() => this.props.navigation.navigate('Sentence')}>
                <Text style = {styles.numbers}>#2</Text>
            </Button>
          </View>


          <View style={styles.button}>
            <Button style = {styles.buttonclear} onPress={() => this.props.navigation.navigate('Sentence')}>
                <Text style = {styles.numbers}>#3</Text>
            </Button>
          </View>

          <View style={styles.button}>
            <Button style = {styles.buttondark} onPress={() => this.props.navigation.navigate('Sentence')}>
                <Text style = {styles.numbers}>#4</Text>
            </Button>
          </View>

          </View>
        </Content>
      </Container>
    );
  }
}
