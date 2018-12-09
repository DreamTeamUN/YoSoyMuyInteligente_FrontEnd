import React, { Component } from 'react';
import { Alert, StyleSheet, TouchableNativeFeedback, View, ScrollView, FlatList } from 'react-native';
import {Text, Button, Icon} from 'native-base';
import styles from '../styles';
import { WEEK } from './Practices';
import { API_LESSONS } from '../config/const';
import Orientation from 'react-native-orientation';

 class LogoTitle extends React.Component {
  render() {
    return (
      <View><Text>Cargando...</Text></View>
    );
  }
}

 export default class WeekProgress extends Component {
  constructor(props) {
    super(props);
    console.log(WEEK);
    this.state = {
      isLoading: false,
      lessons: [],
      text: "",
      url: API_LESSONS.concat(WEEK),
    };
  }

  componentDidMount() {

    //Orientation.addOrientationListener(() => {Orientation.lockToLandscape()});

    Expo.ScreenOrientation.allow(Expo.ScreenOrientation.Orientation.LANDSCAPE);

    this.getLessons();

    if (!this.state.isLoading){

      var i = 0
      var j = 0
      var timer = setInterval(() => {
        this.setState({ text: this.state.lessons[i].frase });
        i++
        if (i >= this.state.lessons.length) {
          if(j > 5){
            clearInterval(timer);
            this.props.navigation.goBack();
          }else{
            j++;
            i=0;
          }
        }
      }, 1000);
    }
    //Expo.ScreenOrientation.allow(Expo.ScreenOrientation.Orientation.LANDSCAPE);
  }

  getLessons = () => {
    this.setState({ isLoading: true })

    fetch(this.state.url)
      .then(resp => resp.json())
      .then(resp => {

        this.setState({
          lessons: resp.frase,
          isLoading: false
        })
      });
  };

  render() {
    if (this.state.isLoading) {
      return (
        <View>
          <View style={styles.home_TextContainer}>
            <Text style={styles.headling}>Cargando...</Text>
          </View>
        </View>
      );
    }
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }} >
        <Text style={{fontSize: 60}}>
          {this.state.text}
        </Text>
      </View>
    );
  }
}
