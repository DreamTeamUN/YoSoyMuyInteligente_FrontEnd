import React, { Component } from 'react';
import { View } from 'react-native';
import { Text, Button, Icon } from 'native-base';
import styles from '../styles';

export default class SignUpMain extends Component {
  static navigationOptions = {
    title: 'Registro',
  };

  render() {
    return (
      <View>
        <View style={styles.textContainer}>
          <Text style={styles.headling}>¿Qué tipo de usuario desea crear?</Text>
        </View>

        <View style={styles.buttonsContainer}>
          <View style={styles.viewButtonHome}>
            <Button full iconLeft rounded style={styles.buttonclear}
              onPress={() => this.props.navigation.navigate('SignUpAdult')}>
              <Icon type="MaterialCommunityIcons" name="face" />
              <Text>Adulto Responsable</Text>
            </Button>
          </View>

          <View style={styles.viewButtonHome}>
            <Button full iconLeft rounded style={styles.buttondark}
              onPress={() => this.props.navigation.navigate('SignUpTeacher')}>
              <Icon name="school" />
              <Text>Docente</Text>
            </Button>
          </View>
        </View>
      </View>
    );
  }
}
