import React, { Component } from 'react';
import { Alert, View } from 'react-native';
import { Text, Button, Icon } from 'native-base';
import styles from '../../styles';

export default class LogInTypeUser extends Component {

  render() {
    return (
      <View>
        <View style={styles.textContainer}>
          <Text style={styles.headling}>Seleccione su tipo de usuario</Text>
        </View>

        <View style={styles.threebuttonsContainer}>
          <View><Button iconLeft rounded style={styles.buttonclear}
            onPress={() => this.props.navigation.navigate('HomeStudent')}>
            <Icon type="MaterialIcons" name="child-care" />
            <Text style={{flex: 1}}>Estudiante</Text>
          </Button></View>

          <View><Button iconLeft rounded style={styles.buttondark}
            onPress={() => this.props.navigation.navigate('LogIn')}>
            <Icon type="MaterialIcons" name="face" />
            <Text style={{flex: 1}}>Adulto Responsable</Text>
          </Button></View>

          <View><Button iconLeft rounded style={styles.buttonclear}
            onPress={() => this.props.navigation.navigate('LogIn')}>
            <Icon name="school" />
            <Text style={{flex: 1}}>Docente</Text>
          </Button></View>
        </View>
      </View>
    );
  }
};
