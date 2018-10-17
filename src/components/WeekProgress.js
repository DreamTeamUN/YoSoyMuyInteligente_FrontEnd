import React, { Component } from 'react';
import { Alert, StyleSheet, TouchableNativeFeedback, View, ScrollView, FlatList } from 'react-native';
import {Text, Button, Icon} from 'native-base';
import styles from '../styles';

 class LogoTitle extends React.Component {
  render() {
    return (
      <TouchableNativeFeedback onPress={() => Alert.alert('Soy una leccion!')} >
        <View style={[styles.button, styles.buttonBlueA]}>
          <Text style={styles.buttonText}>Cargando progreso semanas...</Text>
        </View>
      </TouchableNativeFeedback>
    );
  }
}

 export default class WeekProgress extends Component {
  // static navigationOptions = {
  //   title: 'Inicio',
  // };

  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      lessons: [],
      url: 'https://pokeapi.co/api/v2/pokemon/',
    };
  }

  componentDidMount() {
    this.getLessons();
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
            <Text style={styles.headling}>¡Bienvenido!</Text>
          </View>

          <View style={styles.home_ContainerButtons}>
            {/* <TouchableNativeFeedback onPress={() => this.props.navigation.navigate('WeekProgress')} >
              <View style={[styles.button, styles.buttonBlueB]}>
                <Text style={styles.buttonText}>Progreso semanas</Text>
              </View>
            </TouchableNativeFeedback> */}
            <LogoTitle />

          </View>

        </View>
      );
    }

    return (
      <View style={{flex: 1, paddingTop:20}}>
        <FlatList
          data = {this.state.lessons}
          renderItem = {
            ({item}) => <Text> {item.name} </Text>
          }
          keyExtractor = {(item, index) => index.toString()}
        />

      </View>
    );

  }
}
