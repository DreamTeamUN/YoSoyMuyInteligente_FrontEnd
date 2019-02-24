import React, { Component } from 'react';
import {Alert, ToastAndroid} from 'react-native';
import {Text, Picker, Icon, Container, Header, Body, Title,
  Content, Left, Button, Item, Form, Label, Input} from 'native-base';
import styles from '../../styles';
import {getID} from '../../utils/home';
import { CREATE_DOCENTE_PROGRAMA, storeIdDocentePrograma, getID_Docente_Programa, CREATE_AULA } from '../../utils/aulas';


export default class AddClassRoom extends Component {

  static navigationOptions = {
    header: null
  }

  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      idUsuario: '',
      nombreAula: '',
      programa: '1',
      descripcion: ''
    }
  }

  onValueChange(programa) {
    this.setState({
      programa: programa
    });
  }

  async componentWillMount(){

    this.setState({
      idUsuario: await getID(),
    });
  }

  async createDocentePrograma(){
    try {

      this.setState({
        isLoading: true,
      });

      let response = await CREATE_DOCENTE_PROGRAMA(this.state.idUsuario,
        this.state.programa
      );

      const responseJson = await response.json();
      let status = response.status;

      switch (status) {
        case 201:
          console.log(status + " Nuevo docente_programa creado!!");
          await storeIdDocentePrograma(responseJson.id);
          break;

        case 226:
          console.log(status + " El docente_programa ya existe.");

          break;

        default:
          console.log("Error creando docente_programa, status code: " + status)
          Alert.alert("Error!!",
            "Lo sentimos, ocurrió un error durante la creación del aula, por favor intente de nuevo."
          );
          break;
      }
    } catch (error) {
      console.log("Error creando el docente_programa: " + error);
    }
  }

  async createAula(){

    this.setState({
      isLoading: true
    });

    try {

      await this.createDocentePrograma();
      let response = await CREATE_AULA(this.state.nombreAula, this.state.descripcion);
      let status = response.status;

      switch (status) {
        case 201:
          this.setState({
            isLoading: false
          });

          console.log(status + "Nueva aula creada!!");
          ToastAndroid.show('Nueva aula creada!!!', ToastAndroid.SHORT);
          this.props.navigation.state.params.onNavigateBack();
          this.props.navigation.goBack()
          break;

        default:
          console.log("Error creando la aula, status code: " + status)
          Alert.alert("Error!!",
            "Lo sentimos, ocurrió un error durante la creación del aula, por favor intente de nuevo."
          );
          break;
      }

    } catch (error) {
      this.setState({
        isLoading: false
      });
      console.log("Error creando el aula: " + error);
    }
  }

  render() {
    return (
      <Container>

        <Header style = {styles.headerStyle}>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Crear Aula</Title>
          </Body>
        </Header>

        <Content>
          <Text style = {styles.subtitle}>
            Por favor ingrese los siguientes datos para crear la nueva aula
          </Text>

          <Form>

            <Item picker style = {styles.marginAddAula}>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="ios-arrow-down-outline" />}
                style={{ width: undefined }}
                placeholder="Seleccione un programa"
                placeholderStyle={{ color: "#1F363D" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.programa}
                onValueChange={this.onValueChange.bind(this)}
              >

                <Picker.Item label="Lectura" value="1" />
                <Picker.Item label="Matemáticas" value="2" />
                <Picker.Item label="Inglés" value="3" />
              </Picker>
            </Item>

            <Item floatingLabel style = {styles.marginAddAula}>
              <Label > Nombre del Aula</Label>
              <Input
                maxLength={45}
                onChangeText={
                  (nombreAula) => this.setState({ nombreAula })}
              />
            </Item>

            <Item floatingLabel style = {styles.marginAddAula}>
              <Label >Descripción</Label>
              <Input
                onChangeText={
                  (descripcion) => this.setState({ descripcion })}
              />
            </Item>

          </Form>

          <Button full rounded style = {styles.buttonAceptarAula}
            onPress={this.createAula.bind(this)}>
            <Text style={{flex: 1}}>Aceptar</Text>
          </Button>

        </Content>

      </Container>
    );
  }
}
