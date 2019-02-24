import React, { Component } from 'react';
import { Imagen } from 'react-native';
import { Container, View, Header, Content, Card, CardItem, Title, Fab, Thumbnail, Text, Button, Icon, Left, Body, Right, Spinner, } from 'native-base';
import { storeForDATA, getForEMAIL, getcomments } from '../../utils/CreatePost';
import { getID } from '../../utils/home';
import Dataset from 'impagination';
import styles from '../../styles';
import { API } from '../../config/const';

var BUTTONS = ["Mis entradas", "Cancelar"];
var DESTRUCTIVE_INDEX = 0;
var CANCEL_INDEX = 1;
export default class HomeForum extends Component {
  static navigationOptions = {
    header: null
  }

  constructor(props) {
    super(props);

    this.state = {
      dataset: null,
      datasetState: null,
      numComments: {},

    };
  }


   async comments (id){

      let response = await fetch(`https://ysmiapi.herokuapp.com/entradas/3/${id}/1`, {
          method: 'GET',
          headers: new Headers({
          }),
      });
      let res = await response.json();
      this.state.numComments[id] = res.length;
  }


  async _storeforid(id, title, text, user, email){

      await storeForDATA(id, title, text, user, email)
      let response = await getForEMAIL()
      console.log("id store | res: " + response)
      this.props.navigation.navigate('ForumScreen')

  }


  setupImpagination() {
    let dataset = new Dataset({
      pageSize: 10,
      observe: (datasetState) => {
        this.setState({datasetState});
      },

      // Where to fetch the data from.
      fetch(pageOffset, pageSize, stats) {
        return fetch(`https://ysmiapi.herokuapp.com/entradas/3/0/${pageOffset + 1}`)
          .then(response => response.json())
          .catch((error) => {
            console.error(error);
          });
      }
    });
    dataset.setReadOffset(0);
    this.setState({dataset});
  }

  async componentWillMount() {
      this.setupImpagination();
      await getID();

    }

  setCurrentReadOffset = (event) => {
    let itemHeight = 202;
    let currentOffset = Math.floor(event.nativeEvent.contentOffset.y);
    let currentItemIndex = Math.ceil(currentOffset / itemHeight);

    this.state.dataset.setReadOffset(currentItemIndex);
    }

  render() {
    const { refresh } = this.state;
    return (
      <Container>
        <Header style = {styles.headerStyle}>

          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>

          <Body>
            <Title>Foro</Title>
          </Body>

  

        </Header>
        <Content onScroll={this.setCurrentReadOffset}>

          {this.state.datasetState.map(record => {

            if (!record.isSettled) {
              return <Spinner key={Math.random()}/>;
            }
            this.comments(record.content.id)
            return (
              <View key={record.content.id}>
          <Card>
            <CardItem button onPress={() => this._storeforid(record.content.id, record.content.titulo, record.content.texto,record.content.usuario.user, record.content.usuario.email )}>
              <Left>
                <Thumbnail source={{ uri: `${API}${record.content.usuario.archivo.ruta.url}`}} />
                {/* <Thumbnail source={{uri: 'https://ysmiapi.herokuapp.com/0_default.png'}} /> */}
                
                <Body>
                  <Text>{record.content.titulo}</Text>
                  <Text note>{record.content.usuario.user}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem button onPress={() => this._storeforid(record.content.id, record.content.titulo, record.content.texto,record.content.usuario.user, record.content.usuario.email )}>
              <Text>{record.content.resumen}</Text>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent onPress={() => this._storeforid(record.content.id, record.content.titulo, record.content.texto,record.content.usuario.user, record.content.usuario.email )}>
                  <Icon active name="chatbubbles" />
                  <Text>{this.state.numComments[record.content.id]}</Text>
                </Button>
                </Left>
              <Right>
                <Text>{record.content.created_at.substring(0,10)}</Text>
              </Right>
            </CardItem>
          </Card>
          </View>
        );
       })}
        </Content>
        <Fab
          active={this.state.active}
          direction="up"
          containerStyle={{ }}
          style={{ backgroundColor: '#5067FF' }}
          position="bottomRight"
          onPress={() => this.props.navigation.navigate('CardForum')}>
          <Icon name="add" />
        </Fab>
      </Container>
    );
  }
}
