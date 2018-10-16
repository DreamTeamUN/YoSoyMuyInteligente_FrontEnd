import React, { Component } from 'react';
import { Alert, StyleSheet, TouchableNativeFeedback, View, Switch, TextInput } from 'react-native';
import {Container, Header, Content,Text,List, ListItem, Button} from 'native-base';
import styles from '../styles';


export default class Practicas extends Component {

  render() {
    return (
      <Container>
        <Content>
          <View style={styles.practicas_buttoncontainer}>
          <View style={styles.button}>
            <Button style = {styles.buttonclear} onPress={() => this.props.navigation.navigate('Sentence')}>
                <Text style = {{fontSize: 40}}>#1</Text>
            </Button>
          </View>

          <View style={styles.button}>
            <Button style = {styles.buttondark} onPress={() => this.props.navigation.navigate('Sentence')}>
                <Text style = {{fontSize: 40}}>#2</Text>
            </Button>
          </View>


          <View style={styles.button}>
            <Button style = {styles.buttonclear} onPress={() => this.props.navigation.navigate('Sentence')}>
                <Text style = {{fontSize: 40}}>#3</Text>
            </Button>
          </View>

          <View style={styles.button}>
            <Button style = {styles.buttondark} onPress={() => this.props.navigation.navigate('Sentence')}>
                <Text style = {{fontSize: 40}}>#4</Text>
            </Button>
          </View>

          </View>
        </Content>
      </Container>
    );
  }
}
