import React, { Component } from 'react';
import { View} from 'react-native';
import {Text} from 'native-base';
import styles from '../styles';


export default class ClassRoom extends Component {

    constructor(props) {
      super(props);
    }

    render() {
      return (
          <View style={styles.textContainer}>
            <Text> Este es un texto </Text>
          </View>
      );
    }
}
