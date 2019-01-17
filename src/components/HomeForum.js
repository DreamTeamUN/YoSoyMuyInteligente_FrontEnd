import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, Spinner, } from 'native-base';
import { storeForDATA, getForEMAIL, getcomments } from '../utils/CreatePost';
import Dataset from 'impagination';
export default class HomeForum extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dataset: null,
      datasetState: null,

    };
  }


   async comments (id){

      let response = await fetch(`https://ysmiapi.herokuapp.com/entradas/3/${id}/1`, {
          method: 'GET',
          headers: new Headers({
          }),
      });
      let res = await response.json();
      console.log(res);
      return res


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
        return fetch(`https://ysmiapi.herokuapp.com/entradas/1/0/${pageOffset + 1}`)
          .then(response => response.json())
          .catch((error) => {
            console.error(error);
          });
      }
    });
    dataset.setReadOffset(0);
    this.setState({dataset});
  }

  componentWillMount() {
      this.setupImpagination();
    }

  setCurrentReadOffset = (event) => {
    let itemHeight = 402;
    let currentOffset = Math.floor(event.nativeEvent.contentOffset.y);
    let currentItemIndex = Math.ceil(currentOffset / itemHeight);

    this.state.dataset.setReadOffset(currentItemIndex);
    }

  render() {
    return (
      <Container>
        <Content onScroll={this.setCurrentReadOffset}>
        <Button full info onPress={() => this.props.navigation.navigate('CardForum')}>
            <Text>Crear entrada</Text>
          </Button>
          {this.state.datasetState.map(record => {
            if (!record.isSettled) {
              return <Spinner key={Math.random()}/>;
            }
            return (
          <Card>
            <CardItem >
              <Left>
                <Thumbnail source={{uri: 'Image URL'}} />
                <Body>
                  <Text>{record.content.titulo}</Text>
                  <Text note>{record.content.usuario.user}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody button onPress={() => this._storeforid(record.content.id, record.content.titulo, record.content.texto,record.content.usuario.user, record.content.usuario.email )}>
              <Text>{record.content.resumen}</Text>
            </CardItem>
            <CardItem>
              <Body>
              <Left>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>{this.comments(record.content.id).length}</Text>
                </Button>
                </Left>
              </Body>
              <Right>
                <Text>{record.content.created_at.substring(0,10)}</Text>
              </Right>
            </CardItem>
          </Card>
        );
       })}
        </Content>
      </Container>
    );
  }
}
