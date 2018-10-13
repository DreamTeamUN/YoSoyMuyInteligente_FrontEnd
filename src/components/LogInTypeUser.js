import React, { Component } from 'react';
import { Alert, Platform, Dimensions, StyleSheet, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, View } from 'react-native';
import {Text, Button, Icon} from 'native-base';
import styles from '../styles';

export default class LogInTypeUser extends Component {
  // static navigationOptions = {
  //   title: 'Titulo',
  // };

  render() {
    return (
      <View>

        <View style={styles.loginTU_TextContainer}>
          <Text style={styles.headling}>Seleccione su tipo de usuario</Text>
        </View>

        <View style={styles.loginTU_ContainerButtons}>



            <View style={styles.button}>
              <Button iconLeft rounded style = {styles.buttonclear} onPress={() => this.props.navigation.navigate('Home')}>
                  <Icon type="MaterialIcons" name="child-care" />
                  <Text>Estudiante</Text>
              </Button>
            </View>

            <View style={styles.button}>
              <Button iconLeft rounded style = {styles.buttondark} onPress={() => this.props.navigation.navigate('LogIn')}>
                  <Icon type="MaterialIcons" name="face" />
                  <Text>Adulto Responsable</Text>
              </Button>
            </View>

          <View style={styles.button}>
            <Button iconLeft rounded style = {styles.buttonclear} onPress={() => this.props.navigation.navigate('LogIn')}>
                <Icon name="school" />
                <Text>Docente</Text>
            </Button>
            </View>
          </View>
      </View>
    );
  }
};
