import React, { Component } from 'react';
import { Alert, StyleSheet, TouchableNativeFeedback, View, ScrollView } from 'react-native';
import {Text, Button, Icon, Content} from 'native-base';
import styles from '../styles';

export default class Home extends Component {

  render() {
    return (
        <View style={{flex:1, justifyContent: 'space-between'}}>
        <View style={{flex: 0.5}}>
          <Text style={styles.headling}>¡Bienvenido!</Text>
        </View>

        <View style = {{flex: 0.5, alignItems:'center', justifyContent:'flex-end'}}>

          <View style={styles.button}>
            <Button iconLeft rounded style = {styles.buttonclear} onPress={() => this.props.navigation.navigate('WeekProgress')}>
                <Icon name="apps" />
                <Text>Progreso Semanas</Text>
            </Button>
          </View>


          <View style={styles.button}>
            <Button iconLeft rounded style = {styles.buttondark} onPress={() => this.props.navigation.navigate('GameProgress')}>
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

          <View style={styles.button}>
            <Button iconLeft rounded style = {styles.buttondark}
              onPress={() => this.props.navigation.navigate('AddStudent')}>
                <Icon type="MaterialCommunityIcons" name="settings" />
                <Text>Administrar estudiantes</Text>
            </Button>
          </View>

        </View>
        </View>
    );
  }
}
