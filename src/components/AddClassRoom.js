import React, { Component } from 'react';
import {Text, Fab, Icon, View, Container, Header, Body, Title, Content, Left, Button} from 'native-base';
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
            <View style = {{flex: 1}}>
              <Text> Texto kjnafjjdf, vad,fn sd</Text>
            </View>
          </Content>

        </Container>
      );
    }
}
