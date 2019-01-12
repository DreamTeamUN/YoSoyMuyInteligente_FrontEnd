import React, { Component } from 'react';
import { ScrollView, Image, AsyncStorage, StyleSheet,View,TouchableOpacity,FlatList } from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Body } from "native-base";
import { getForID, getForTITLE, getForTEXT, getForUSER, getForEMAIL, getcomments } from '../utils/CreatePost';
import styles from '../styles';
import { API } from '../config/const';
import Comments from 'react-native-comments';
import * as commentActions from '../utils/ExampleActions';
import moment from 'moment';

export default class ForumScreen extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.actions = commentActions;
    this.state = {
      titulo: '',
      texto: '',
      usuario: '',
      data: []

    };

  }

  static navigatorStyle = {};

  async componentWillMount() {
    const c = this.actions.getComments();
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
        <FlatList
  style={styles.rootf}
  data={this.state.data}
  extraData={this.state}
  ItemSeparatorComponent={() => {
    return (
      <View style={styles.separatorf}/>
    )
  }}
  keyExtractor={(item)=>{
    return item.id;
  }}
  renderItem={(item) => {
    const Notification = item.item;
    return(
      <View style={styles.containerf}>
        <TouchableOpacity onPress={() => {}}>
          <Image style={styles.imagef} source={{uri: `${API}${Notification.usuario.archivo.ruta.url}`}}/>
        </TouchableOpacity>
        <View style={styles.contentf}>
          <View style={styles.contentHeaderf}>
            <Text  style={styles.namef}>{Notification.usuario.user}</Text>
            <Text style={styles.timef}>
              9:58 am
            </Text>
          </View>
          <Text rkType='primary3 mediumLine'>{Notification.texto}</Text>
        </View>
      </View>
    );
  }}/>
      </ScrollView>
    );
  }
}
