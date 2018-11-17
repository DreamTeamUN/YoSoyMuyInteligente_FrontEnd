import React, { Component } from 'react';
import { ActivityIndicator, View, ScrollView, AsyncStorage, StatusBar } from 'react-native';
import { Text, Button, Icon, Content } from 'native-base';
import axios from "axios";
import { API_USERS } from '../config/const';
import { getToken, removeToken } from '../utils/logIn';
import styles from '../styles';

export default class HomeAdult extends Component {
  // static navigationOptions = {
  //   title: 'Adulto/Docente',
  // };

  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      username: '',
    };
  }

  async componentWillMount() {
    this.setState({ isLoading: true })
    try {
      let token = await getToken()
      console.log("HomeAdult componentWillMount | token: " + token)
      let response = await fetch(API_USERS, {
        method: 'GET',
        headers: new Headers({
          "Authorization": 'Bearer ' + token
        }),
      });
      let res = await response.json();
      this.setState({
        username: res.user,
      })
      console.log("HomeAdult | user: " + this.state.username)
    } catch (error) {
      console.log("HomeAdult componentWillMount | Something went wrong")
    }
    this.setState({ isLoading: false })
  }

  _signOutAsync = async () => {
    console.log("Cerrando sesion...")
    removeToken()
    this.props.navigation.navigate('Auth');
  };

  render() {
    if (this.state.isLoading) {
      return (
        <View>
          <View style={styles.home_TextContainer}>
            <Text style={styles.headling}>Cargando</Text>
            <ActivityIndicator size="large" color="#4267B2" />
          </View>
        </View>
      );
    }
    return (
      <ScrollView>
        <View style={styles.homeAdult_TextContainer}>
          <Text style={styles.headling}>¡Bienvenido, {this.state.username}!</Text>
        </View>

        <View style={styles.homeAdult_buttonsContainer}>

          <View>
            <Button iconLeft rounded style={styles.buttonclear}
              onPress={() => this.props.navigation.navigate('EditProfile')}>
              <Icon type="Feather" name="edit" />
              <Text>Editar perfil</Text>
            </Button>
          </View>

          <View>
            <Button iconLeft rounded style={styles.buttondark}
              onPress={() => this.props.navigation.navigate('WeekProgress')}>
              <Icon name="apps" />
              <Text>Progreso Semanas</Text>
            </Button>
          </View>

          <View>
            <Button iconLeft rounded style={styles.buttonclear}
              onPress={() => this.props.navigation.navigate('GameProgress')}>
              <Icon type="MaterialIcons" name="videogame-asset" />
              <Text>Progreso Juegos</Text>
            </Button>
          </View>

          <View>
            <Button iconLeft rounded style={styles.buttondark}
              onPress={() => this.props.navigation.navigate('Forum')}>
              <Icon type="MaterialCommunityIcons" name="forum" />
              <Text>Ingreso al foro</Text>
            </Button>
          </View>

          <View>
            <Button iconLeft rounded style={styles.buttonclear}
              onPress={() => this.props.navigation.navigate('AddStudent')}>
              <Icon type="MaterialCommunityIcons" name="settings" />
              <Text>Administrar estudiantes</Text>
            </Button>
          </View>

          {/* <View>
            <Button iconLeft rounded style={styles.buttondark}
              onPress={() => this.props.navigation.navigate('AddStudent')}>
              <Icon type="MaterialCommunityIcons" name="settings" />
              <Text>Administrar cuenta</Text>
            </Button>
          </View> */}

          <View>
            {/* <Button iconLeft rounded style={styles.buttondark} */}
            <Button rounded style={styles.buttondark}
              onPress={this._signOutAsync}>
              <Icon type="Entypo" name="log-out" />
              <Text>Cerrar sesion</Text>
            </Button>
            <StatusBar
              backgroundColor="blue"
              barStyle="light-content"
            />
          </View>


        </View>

      </ScrollView>
    );
  }


}
