import React, { Component } from 'react';
import { Alert, StyleSheet, TouchableNativeFeedback, View, ScrollView } from 'react-native';
import {Text, Button, Icon} from 'native-base';
import styles from '../styles';

export default class Home extends Component {
  // static navigationOptions = {
  //   title: 'Inicio',
  // };

  render() {
    return (
      <View>
        <View style={styles.home_TextContainer}>
          <Text style={styles.headling}>¡Bienvenido!</Text>
        </View>

        <View style={styles.home_ContainerButtons}>

          <View style={styles.button}>
            <Button iconLeft rounded style = {styles.buttonclear} onPress={() => this.props.navigation.navigate('WeekProgress')}>
                <Icon name="apps" />
                <Text>Progreso Semanas</Text>
            </Button>
          </View>


          <View style={styles.button}>
            <Button iconLeft rounded style = {styles.buttondark} onPress={() => this.props.navigation.navigate('Sentence')}>
                <Icon type="MaterialIcons" name="videogame-asset" />
                <Text>Progreso Juegos</Text>
            </Button>
          </View>


          <View style={styles.button}>
            <Button iconLeft rounded style = {styles.buttonclear} onPress={() => this.props.navigation.navigate('Forum')}>
                <Icon type="MaterialCommunityIcons" name="forum" />
                <Text>Ingreso al foro</Text>
            </Button>
          </View>
        </View>
      </View>
    );
  }
}
