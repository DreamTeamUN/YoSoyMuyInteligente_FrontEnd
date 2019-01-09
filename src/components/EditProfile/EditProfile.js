import React, { Component } from 'react';
import { View, Alert } from 'react-native';
import { Container, Header, Content, Form, Item, Label, Input, Button, Icon, Title, Left, Right, Body, Text, List, ListItem } from 'native-base';
import styles from '../../styles';

import { StyleProvider } from "native-base";
import getTheme from "../../../native-base-theme/components";
import variables from "../../../native-base-theme/variables/commonColor";

// import { putEditData } from '../../utils/editProfile';

export default class EditProfile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      fullname: '',
      password: '',
      password2: '',
      birthdate: '',
      // foto: '',
      errors: [],
      isLoading: false,
    };
  }

  render() {
    return (
      <StyleProvider style={getTheme(variables)}>
        <Container>
          {/* <Header>
            <Left>
              <Button transparent onPress={() => this.props.navigation.goBack()}>
                <Icon name="arrow-back" />
              </Button>
            </Left>
            <Body>
              <Title>Editar perfil</Title>
            </Body>
            <Right />
          </Header> */}

          <Content>

            <List>
              <ListItem
                onPress={() => this.props.navigation.navigate('ChangeFullname')} >
                <Text>Nombre</Text>
              </ListItem>

              <ListItem
                onPress={() => this.props.navigation.navigate('ChangePassword')}>
                <Text>Cambiar Contraseña</Text>
              </ListItem>

              <ListItem
                onPress={() => this.props.navigation.navigate('ChangeBirthdate')}>
                <Text>Fecha de nacimiento</Text>
              </ListItem>
              <ListItem>
                <Text>Cambiar foto (temporal)</Text>
              </ListItem>
            </List>

          </Content>

        </Container>
      </StyleProvider>
    );
  }
}
