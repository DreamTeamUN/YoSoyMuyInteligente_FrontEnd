import React, { Component } from 'react';
import {Text, Fab, Icon, View, Container, Content, Header, Title, Button,
   Left, Body, Card, CardItem, Right} from 'native-base';
import styles from '../styles';
import {API_CREATE_AULA} from '../config/const'
import {getID, getTipoUsuario} from '../utils/home';


export default class AdminStudentsTutor extends Component {

    static navigationOptions = {
        header: null
    }


    constructor(props) {
      super(props);
      this.state = {
        active: 'true',
        isLoading: false,
        data: [],
      };
    }

    getData() {
      const {page, seed} = this.state;
      this.setState({isLoading: true});
      const url = 'https://swapi.co/api/people/?format=json';
      return fetch(url)
          .then((response) => response.json())
          .then((responseJson) => {
              this.setState({
                  data: responseJson.results,
                  isLoading: false,
              });
          })
          .catch((error) => {
              console.error(error);
          });
    }

    componentDidMount() {
      this.getData();
    }

    render() {

      let display = this.state.data.map(function (NewsData, index) {
          return (
              <View key={NewsData.id}>
                <Card>
                  <CardItem >
                    <Icon active name="person" />
                    <Text>{NewsData.name}</Text>
                   </CardItem>
                </Card>
              </View>
          )
      });

      return (
        <Container>
          <Header style = {styles.headerStyle}>

            <Left>
              <Button transparent onPress={() => this.props.navigation.goBack()}>
                <Icon name="arrow-back" />
              </Button>
            </Left>

            <Body>
              <Title>Panel de estudiantes</Title>
            </Body>

          </Header>

          <Content style = {styles.maxHeight}>
            {display}
          </Content>

         <Fab
           active={this.state.active}
           direction="up"
           containerStyle={{ }}
           style={{ backgroundColor: '#5067FF' }}
           position="bottomRight"
           onPress={() => this.props.navigation.navigate('AddStudent')}>
           <Icon name="add" />
         </Fab>

        </Container>

      );
  }
}
