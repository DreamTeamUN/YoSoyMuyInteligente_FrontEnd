import React, { Component } from 'react';
import {View, BackHandler} from 'react-native';
import {Text} from 'native-base';
import styles from '../styles';
import { WEEK } from './Practices';
import { API_LESSONS } from '../config/const';

 class LogoTitle extends React.Component {

  render() {
    return (
      <View><Text>Cargando...</Text></View>
    );
  }
}

 export default class WeekProgress extends Component {

   static navigationOptions = {
      header: null,
   }

   constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      lessons: [],
      text: "",
      url: API_LESSONS.concat(WEEK),
    };
  }

  componentDidMount() {

    Expo.ScreenOrientation.allow(Expo.ScreenOrientation.Orientation.LANDSCAPE);
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
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
      }, 800);
    }

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

  handleBackButton() {
    return true;
  }

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
      <View style={styles.containerSentence} >
        <Text style={styles.textSentence}>
          {this.state.text}
        </Text>
      </View>
    );
  }

  componentWillUnmount(){
    if (!this.state.isLoading) {
      BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
      Expo.ScreenOrientation.allow(Expo.ScreenOrientation.Orientation.PORTRAIT);
    }
  }
}
