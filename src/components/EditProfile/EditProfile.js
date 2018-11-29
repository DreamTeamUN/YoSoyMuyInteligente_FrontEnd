import React, { Component } from 'react';
import { View, Alert } from 'react-native';
import { Container, Header, Content, Form, Item, Label, Input, Button, Icon, Title, Left, Right, Body, Text, List, ListItem } from 'native-base';
import styles from '../../styles';

import { StyleProvider } from "native-base";
import getTheme from "../../../native-base-theme/components";
import variables from "../../../native-base-theme/variables/commonColor";

import { putEditData } from '../../utils/editProfile';

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

  async _sendNewData() {
    putEditData("Benito Camelas")
    // let token = await getToken()
    // getUserData(token);
    console.log("_sendNewData Done")
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
                // onPress={this._sendNewData.bind(this)}
                >
                <Text>Nombre</Text>
              </ListItem>
              <ListItem>
                <Text>Cambiar Contraseña</Text>
              </ListItem>
              <ListItem>
                <Text>Cumpleaños</Text>
              </ListItem>
              <ListItem>
                <Text>Cambiar foto (temporal)</Text>
              </ListItem>
            </List>

          </Content>

          <View>
            <Button iconLeft rounded
              style={styles.buttondark}
              onPress={this._sendNewData.bind(this)} >
              <Icon type="MaterialIcons" name="done" />
              <Text>Enviar cambios</Text>
            </Button>
          </View>

        </Container>
      </StyleProvider>
    );
  }
}
