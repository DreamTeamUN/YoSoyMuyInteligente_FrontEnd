import React, { Component } from 'react';
import { Alert, StyleSheet, Text, TouchableNativeFeedback, View, ScrollView } from 'react-native';
import styles from '../styles';

class SentenceAux extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   isLoading: false,
    // };

    // setInterval(() => {
    //   this.setState(previousState => {
    //     return { isShowingText: !previousState.isShowingText };
    //   });
    // }, 1000);
  }
  
  render() {
    let display = this.props.text;
    return (
        // <View style={[styles.button, styles.buttonBlueA]}>
          // <Text style={styles.buttonText}>Descargando Pokemon</Text>
          <Text style={styles.headling}>{display}</Text>
        // </View>
    );
  }
}

export default class Sentence extends Component {
  // static navigationOptions = {
  //   title: 'Inicio',
  // };

  componentDidMount() {
    Expo.ScreenOrientation.allow(Expo.ScreenOrientation.Orientation.LANDSCAPE);
  }

  componentWillUnmount() {
    Expo.ScreenOrientation.allow(Expo.ScreenOrientation.Orientation.PORTRAIT);
  }
  render() {
    return (
      <View>
        <SentenceAux text="Higüi"/>

        <View style={styles.home_ContainerButtons}>

          {/* <TouchableNativeFeedback onPress={() => this.props.navigation.navigate('Forum')} >
            <View style={[styles.button, styles.buttonBlueB]}>
              <Text style={styles.buttonText}>Ingresar al foro</Text>
            </View>
          </TouchableNativeFeedback> */}
        </View >

      </View>
    );
  }
}