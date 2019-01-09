import React, { Component } from 'react';
import {Text, Picker, Icon, Container, Header, Body, Title,
  Content, Left, Button, Item, Form, Label, Input} from 'native-base';
import styles from '../styles';
import {getID} from '../utils/home';


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
        programa: undefined,
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

            <Button full rounded style = {styles.buttonAceptarAula}>
              <Text>Aceptar</Text>
            </Button>

          </Content>

        </Container>
      );
    }
}
