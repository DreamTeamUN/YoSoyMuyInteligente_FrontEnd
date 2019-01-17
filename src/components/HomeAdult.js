import React, { Component } from 'react';
import { ActivityIndicator, View, ScrollView, AsyncStorage, StatusBar } from 'react-native';
import { Text, Button, Icon, Content } from 'native-base';
import axios from "axios";
import { API } from '../config/const';
import { getToken, removeToken } from '../utils/logIn';
import { setUserData, getUsername, getTipoUsuario, getFullname } from '../utils/home';
import styles from '../styles';

export default class HomeAdult extends Component {

  static navigationOptions = {
    title: 'Bienvenido',
    headerTitleStyle :{textAlign: 'center',alignSelf:'center'},
  };

  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      username: '',
      fullname: '',
      tipoUsuario: '',
    };
  }

  async componentWillMount() {
    this.setState({ isLoading: true })
    try {
      let token = await getToken()
      console.log("HomeAdult componentWillMount | token: " + token)
      await setUserData(token);
      this.setState({
        username: await getUsername(),
        fullname: await getFullname(),
        tipoUsuario: await getTipoUsuario(),
      })
      console.log("HomeAdult | user: " + this.state.username)
    } catch (error) {
      console.log("HomeAdult componentWillMount | Something went wrong")
    }
    await this.listarFrasesPNL()
    this.setState({ isLoading: false })
  }


  generateRandomNumber(min, max) {
   let random_number = Math.random() * (max-min) + min;
    return Math.floor(random_number);
  }

  async listarFrasesPNL() {

    this.setState({isLoading: true});
    const URL = API.concat("/tipo_usuarios/").concat(this.state.tipoUsuario).concat("/frase_pnls");
    console.log("URL estudiante: " + URL)
    try {
      const response = await fetch(URL);
      const responseJson = await response.json();

      this.setState({
        frases: responseJson,
        fraseseleccionada: responseJson[this.generateRandomNumber(0, responseJson.length)].frase, //imprimir más
      });
      console.log(this.state.fraseseleccionada);
    }
    catch (error) {
      console.error("Error en la consulta: " + error);
      this.setState({isLoading: false});
    }
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

    if (this.state.tipoUsuario == 2){
      return (
        <ScrollView>
          <View style={styles.homeAdult_TextContainer}>
            <Text style={styles.headling}>¡Bienvenido, {this.state.fullname}!</Text>
            <Text>Frase PNL del día: {this.state.fraseseleccionada}</Text>
          </View>

          <View style={styles.homeAdult_buttonsContainer}>

            <View style = {styles.viewButtonHome}>
              <Button full iconLeft rounded style={styles.buttonclear}
                onPress={() => this.props.navigation.navigate('EditProfile')}>
                <Icon type="Feather" name="edit" />
                <Text>Editar perfil</Text>
              </Button>
            </View>

            <View style = {styles.viewButtonHome}>
              <Button full iconLeft rounded style={styles.buttondark}
                onPress={() => this.props.navigation.navigate('HomeForum')}>
                <Icon type="MaterialCommunityIcons" name="forum" />
                <Text>Ingreso al foro</Text>
              </Button>
            </View>

            <View style = {styles.viewButtonHome}>
              <Button full iconLeft rounded style={styles.buttonclear}
                onPress={() => this.props.navigation.navigate('ClassRoom')}>
                <Icon type="MaterialCommunityIcons" name="settings" />
                <Text>Aulas</Text>
              </Button>
            </View>

            <View style = {styles.viewButtonHome}>
              <Button full rounded style={styles.buttondark}
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
    else {
      return (
        <ScrollView>
          <View style={styles.homeAdult_TextContainer}>
            <Text style={styles.headling}>¡Bienvenido, {this.state.fullname}!</Text>
            <Text style={styles.frasePNL}>“{this.state.fraseseleccionada}”</Text>
          </View>

          <View style={styles.homeAdult_buttonsContainer}>

            <View style = {styles.viewButtonHome}>
              <Button full iconLeft rounded style={styles.buttonclear}
                onPress={() => this.props.navigation.navigate('EditProfile')}>
                <Icon type="Feather" name="edit" />
                <Text>Editar perfil</Text>
              </Button>
            </View>

            <View style = {styles.viewButtonHome}>
              <Button full iconLeft rounded style={styles.buttondark}
                onPress={() => this.props.navigation.navigate('HomeForum')}>
                <Icon type="MaterialCommunityIcons" name="forum" />
                <Text>Ingreso al foro</Text>
              </Button>
            </View>

            <View style = {styles.viewButtonHome}>
              <Button full iconLeft rounded style={styles.buttonclear}
                onPress={() => this.props.navigation.navigate('AdminStudentsTutor')}>
                <Icon type="MaterialCommunityIcons" name="settings" />
                <Text>Estudiantes</Text>
              </Button>
            </View>

            <View style = {styles.viewButtonHome}>
              <Button full rounded style={styles.buttondark}
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


}
