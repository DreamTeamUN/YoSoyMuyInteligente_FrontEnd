import React, { Component } from 'react';
import {Text, Fab, Icon, View, Container, Content, Header, Title, Button,
   Left, Body, Card, CardItem, Right} from 'native-base';
import styles from '../styles';
import {API_CREATE_AULA} from '../config/const';
import {getID, getTipoUsuario} from '../utils/home';


export default class ClassRoom extends Component {

    static navigationOptions = {
        header: null
    }


    constructor(props) {
      super(props);
      this.state = {
        active: 'true',
        isLoading: false,
        data: [],
        tipo_usuario: '-1',
        idUsuario: '',
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

  async componentWillMount(){
      this.setState({
        tipo_usuario: await getTipoUsuario(),
        idUsuario: await getID(),
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
                  <CardItem button onPress={() => this.props.navigation.navigate('AddClassRoom')}>
                    <Icon active name="home" />
                    <Text>{NewsData.name}</Text>
                    <Right>
                      <Icon name="arrow-forward" />
                    </Right>
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
              <Title>Aulas</Title>
            </Body>

          </Header>

          <Content style = {styles.maxHeight}>
          <Text>
            TIPO_USUARIO: {this.state.tipo_usuario}
            ID: {this.state.idUsuario}
          </Text>
            {display}
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
