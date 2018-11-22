import React, { Component } from 'react';
import { View, Alert } from 'react-native';
import { Container, Header, Content, Form, Item, Label, Input, Button, Icon, Title, Left, Right, Body, Text } from 'native-base';
import styles from '../styles';

import { StyleProvider } from "native-base";
import getTheme from "../../native-base-theme/components";
import variables from "../../native-base-theme/variables/commonColor";

import { putEditData } from '../utils/editProfile';

export default class EditProfile extends Component {

  constructor(props) {
    super(props);
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
          <Header>
            <Left>
              <Button transparent onPress={() => this.props.navigation.goBack()}>
                <Icon name="arrow-back" />
              </Button>
            </Left>
            <Body>
              <Title>Editar perfil</Title>
            </Body>
            <Right />
          </Header>

          <Content>
            <Form>
              <Item inlineLabel>
                <Label>Username</Label>
                <Input />
              </Item>
              <Item inlineLabel last>
                <Label>Password</Label>
                <Input />
              </Item>
            </Form>
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
