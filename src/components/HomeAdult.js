import React, { Component } from 'react';
import { Alert, View, ScrollView } from 'react-native';
import { Text, Button, Icon, Content } from 'native-base';
import styles from '../styles';

export default class HomeAdult extends Component {
  // static navigationOptions = {
  //   title: 'Adulto/Docente',
  // };

  render() {
    return (
      <ScrollView>
        <View style={styles.homeAdult_TextContainer}>
          <Text style={styles.headling}>¡Bienvenido!</Text>
        </View>

        <View style={styles.homeAdult_buttonsContainer}>

          <View>
            <Button iconLeft rounded style={styles.buttonclear}
              onPress={() => this.props.navigation.navigate('WeekProgress')}>
              <Icon name="apps" />
              <Text>Progreso Semanas</Text>
            </Button>
          </View>

          <View>
            <Button iconLeft rounded style={styles.buttondark}
              onPress={() => this.props.navigation.navigate('GameProgress')}>
              <Icon type="MaterialIcons" name="videogame-asset" />
              <Text>Progreso Juegos</Text>
            </Button>
          </View>

          <View>
            <Button iconLeft rounded style={styles.buttonclear}
              onPress={() => this.props.navigation.navigate('Forum')}>
              <Icon type="MaterialCommunityIcons" name="forum" />
              <Text>Ingreso al foro</Text>
            </Button>
          </View>

          <View>
            <Button iconLeft rounded style={styles.buttondark}
              onPress={() => this.props.navigation.navigate('AddStudent')}>
              <Icon type="MaterialCommunityIcons" name="settings" />
              <Text>Administrar estudiantes</Text>
            </Button>
          </View>
        </View>
      </ScrollView>
    );
  }
}
