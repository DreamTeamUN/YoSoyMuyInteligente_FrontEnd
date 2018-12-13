import React, { Component } from 'react';
import { Button} from 'react-native';
import {Text, Fab, Icon, View} from 'native-base';
import styles from '../styles';


export default class ClassRoom extends Component {

    constructor(props) {
      super(props);
      this.state = {
        active: 'true'
      };
    }

    render() {
      return (
          <View style = {{flex: 1}}>
            <Fab
              active={this.state.active}
              direction="up"
              containerStyle={{ }}
              style={{ backgroundColor: '#5067FF' }}
              position="bottomRight"
              onPress={() => this.props.navigation.navigate('AddClassRoom')}>
              <Icon name="add" />
            </Fab>
          </View>
      );
    }
}
