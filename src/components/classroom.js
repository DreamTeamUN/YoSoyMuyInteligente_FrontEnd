import React, { Component } from 'react';
import {Text, Fab, Icon, View, Container, Content, Header, Title, Button,
   Left, Body, Card, CardItem, Right} from 'native-base';
import styles from '../styles';


export default class ClassRoom extends Component {

    static navigationOptions = {
        header: null
    }

    constructor(props) {
      super(props);
      this.state = {
        active: 'true'
      };
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
              <Title>Aulas</Title>
            </Body>

          </Header>

          <Content style = {styles.maxHeight}>
          <Card>

            <CardItem button onPress={() => this.props.navigation.navigate('AddClassRoom')}>
              <Icon active name="home" />
              <Text>Aula 1</Text>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
             </CardItem>

           <CardItem>
             <Icon active name="home" />
             <Text>Aula 2</Text>
             <Right>
               <Icon name="arrow-forward" />
             </Right>
            </CardItem>

          </Card>

        </Content>

         <Fab
           active={this.state.active}
           direction="up"
           containerStyle={{ }}
           style={{ backgroundColor: '#5067FF' }}
           position="bottomRight"
           onPress={() => this.props.navigation.navigate('AddClassRoom')}>
           <Icon name="add" />
         </Fab>

        </Container>

      );
    }
}
