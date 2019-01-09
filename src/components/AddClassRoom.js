import React, { Component } from 'react';
import {Alert} from 'react-native';
import {Text, Picker, Icon, Container, Header, Body, Title,
  Content, Left, Button, Item, Form, Label, Input} from 'native-base';
import styles from '../styles';
import {getID} from '../utils/home';
import { CREATE_DOCENTE_PROGRAMA } from '../utils/aulas';


export default class AddClassRoom extends Component {

    static navigationOptions = {
        header: null
    }

    constructor(props) {
      super(props);
      this.state = {
        isLoading: false,
        idUsuario: '',
        idDocentePrograma: '',
        idDocente: '',
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

        let status = response.status;
      
        switch (status) {
          case 201:
            console.log(status + "Nuevo docente_programa creado!!");
            await this.createAula.bind(this);
            break;
        
          default:
            console.log("Error creando docente_programa, status code: " + status)
            Alert.alert("Error!!", 
              "Lo sentimos, ocurrió un error durante la creación del aula, por favor intente de nuevo."
            );  
            break;
        }
      } catch (error) {
        console.log("Error creando el docente_programa: " + error)
      }
    } 

    async createAula(){

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
                <Input />
              </Item>

              <Item floatingLabel style = {styles.marginAddAula}>
                <Label >Descripción</Label>
                <Input />
              </Item>

            </Form>

            <Button full rounded style = {styles.buttonAceptarAula} 
              onPress={this.createDocentePrograma.bind(this)}>
              <Text>Aceptar</Text>
            </Button>

          </Content>

        </Container>
      );
    }
}
