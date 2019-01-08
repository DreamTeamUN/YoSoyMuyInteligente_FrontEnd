import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Text, Button, Icon, Left, Body, Right, Form, Input, Item, Label, Textarea } from 'native-base';
export default class CardForum extends Component {
  render() {
    return (
      <Container>
          <Header />
          <Content>
            <Form>
            <Item regular>
          <Input placeholder='Titulo' />
              </Item>
              <Textarea rowSpan={5} bordered placeholder="Texto" />
            </Form>
            <Button info onPress={() => this.props.navigation.navigate('HomeForum')}><Text> Enviar </Text></Button>
          </Content>    
        </Container>
    );
  }
}
