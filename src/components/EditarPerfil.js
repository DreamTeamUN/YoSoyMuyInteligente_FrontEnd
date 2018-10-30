import React, { Component } from 'react';
import { View } from 'react-native';
import Expo from "expo";
import { Button, Icon, Text } from 'native-base';
import styles from '../styles';

export default class EditarPerfil extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <Header>
          <Label>Perfil</Label>
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
      </Container>

    );
  }
}
