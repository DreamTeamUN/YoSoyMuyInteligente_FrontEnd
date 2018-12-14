import React, { Component } from 'react';
import {Text, Fab, Icon, View, Container, Header, Body, Title,
  Content, Left, Button, Item, Form, Label, Input} from 'native-base';
import styles from '../styles';


export default class AddClassRoom extends Component {

    static navigationOptions = {
        header: null
    }

    constructor(props) {
      super(props);
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
              <Item floatingLabel style = {styles.marginAddAula}>
                <Label > Nombre del Aula</Label>
                <Input />
              </Item>

              <Item floatingLabel style = {styles.marginAddAula}>
                <Label >Programa</Label>
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
