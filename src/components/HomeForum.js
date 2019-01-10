import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, Spinner, } from 'native-base';
import Dataset from 'impagination';
export default class HomeForum extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dataset: null,
      datasetState: null,
    };
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
        <Header />
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
            <CardItem cardBody button onPress={() => this.props.navigation.navigate('ForumScreen')}>
              <Text>{record.content.resumen}</Text>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>{record.content.ramificacion - 1}</Text>
                </Button>
              </Body>
              <Right>
                <Text>{record.content.created_at}</Text>
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
