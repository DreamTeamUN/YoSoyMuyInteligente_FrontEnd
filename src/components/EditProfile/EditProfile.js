import React, { Component } from 'react';
import { View, Alert, Image } from 'react-native';
import { Container, Header, Content, Form, Item, Label, Input, Button, Icon, Title, Left, Right, Body, Text, List, ListItem } from 'native-base';
import styles from '../../styles';

import { StyleProvider } from "native-base";
import getTheme from "../../../native-base-theme/components";
import variables from "../../../native-base-theme/variables/commonColor";

// import { putEditData } from '../../utils/editProfile';

export default class EditProfile extends Component {
  static navigationOptions = {
    header: null
  }

  constructor(props) {
    super(props);
    this.state = {
      errors: [],
      isLoading: false,
    };
  }

  render() {
    return (
      <StyleProvider style={getTheme(variables)}>
        <Container>
          <Header style={styles.headerStyle}>
            <Left>
              <Button transparent onPress={() => this.props.navigation.goBack()}>
                <Icon name="arrow-back" />
              </Button>
            </Left>

            <Body>
              <Title>Editar perfil</Title>
            </Body>

            <Right>
              <Image
                style={styles.profilePhoto}
                source={{ uri: 'https://ysmiapi.herokuapp.com/AVN_photo.jpg' }}
              />
            </Right>
          </Header>

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
              <ListItem
                onPress={() => this.props.navigation.navigate('ChangePhoto')}>
                <Text>Cambiar foto</Text>
              </ListItem>
            </List>

          </Content>

        </Container>
      </StyleProvider>
    );
  }
}
