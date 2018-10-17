import React, { Component } from 'react';
import { Alert, StyleSheet, TouchableNativeFeedback, View, ScrollView, FlatList } from 'react-native';
import {Text, Button, Icon} from 'native-base';
import styles from '../styles';

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
    this.state = {
      isLoading: false,
      lessons: [],
      url: 'https://ysmiapi.herokuapp.com/leccions/1',
    };
  }

  componentDidMount() {
    this.getLessons();
    //Expo.ScreenOrientation.allow(Expo.ScreenOrientation.Orientation.LANDSCAPE);
  }

  componentWillMount() {
    //Expo.ScreenOrientation.allow(Expo.ScreenOrientation.Orientation.PORTRAIT);
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
      <View style={{flex: 1, paddingTop:20}}>
        <FlatList
          data = {this.state.lessons}
          renderItem = {
            ({item}) => <Text style={{fontSize:50}}> {item.frase} </Text>
          }
          keyExtractor = {(item, index) => index.toString()}
        />
      </View>

    );
  }
}
