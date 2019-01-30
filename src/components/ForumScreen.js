import React, { Component } from 'react';
import { ScrollView, Image, AsyncStorage, StyleSheet,View,TouchableOpacity,FlatList } from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Body, Input, Item, Icon, Button } from "native-base";
import { getForID, getForTITLE, getForTEXT, getForUSER, getForEMAIL, getcomments } from '../utils/CreatePost';
import styles from '../styles';
import { API } from '../config/const';
import Comments from '../components/Comments'
import moment from 'moment';

export default class ForumScreen extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      titulo: '',
      texto: '',
      usuario: '',
    };
  }

  static navigatorStyle = {};

  async componentWillMount() {

    this.setState({
      loadingComments: false,
      lastCommentUpdate: new Date().getTime(),
      titulo: await  getForTITLE(),
      texto: await getForTEXT(),
      usuario: await getForUSER(),
      data: await getcomments(),
    });
  }



  render() {


    return (
      /*
      * They should add scroll to end on save action
      *They should not update comments if there are modals opened
      *
      * */
      <ScrollView
        style={styles.container}
        keyboardShouldPersistTaps="always"
        onScroll={event => {
          this.scrollIndex = event.nativeEvent.contentOffset.y;
        }}
        ref={"scrollView"}
      >
      <Card>
          <CardItem header bordered>
            <Text>{this.state.titulo}</Text>
          </CardItem>
          <CardItem bordered>
            <Body>
              <Text>
                {this.state.texto}
              </Text>
            </Body>
          </CardItem>
          <CardItem footer bordered>
            <Text>{this.state.usuario}</Text>
          </CardItem>
        </Card>

        <Comments/>
      </ScrollView>
    );
  }
}
