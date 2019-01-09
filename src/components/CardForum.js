import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Text, Button, Icon, Left, Body, Right, Form, Input, Item, Label, Textarea } from 'native-base';
import { createPost } from '../utils/CreatePost';
export default class CardForum extends Component {

  constructor(props) {
      super(props);
      this.state = {
          titulo: '',
          texto: '',
      };
  }

  async _createNewPost() {

          await createPost(this.state.titulo, this.state.texto)
          this.props.navigation.navigate('HomeForum')
          console.log("createPost Done")


  }

  render() {
    return (
      <Container>
          <Header />
          <Content>
            <Form>
            <Item regular>
          <Input placeholder='Titulo' onChangeText={(titulo) => this.setState({ titulo })}
          value={this.state.titulo} />
              </Item>
              <Textarea rowSpan={5} bordered placeholder="Texto" onChangeText={(texto) => this.setState({ texto })}
              value={this.state.texto}/>
            </Form>
            <Button info onPress={this._createNewPost.bind(this) }><Text> Enviar </Text></Button>
          </Content>
        </Container>
    );
  }
}
