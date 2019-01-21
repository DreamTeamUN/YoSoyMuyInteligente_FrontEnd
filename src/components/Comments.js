import React, { Component } from 'react';
import { ScrollView, Image, AsyncStorage, StyleSheet,View,TouchableOpacity,FlatList } from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Body, Input, Item, Icon, Button } from "native-base";
import { getForID, getForTITLE, getForTEXT, getForUSER, getForEMAIL, getcomments, createComment } from '../utils/CreatePost';
import styles from '../styles';
import { API } from '../config/const';
import moment from 'moment';

export default class Comments extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      texto: '',
      data: []

    };

  }
  async componentWillMount() {

    this.setState({
      data: await getcomments(),

    });

  }

  async _createNewComment() {
          try {
            let response = await createComment( this.state.texto);
            console.log(response.status)
            if (response.status >= 200 && response.status < 300){
              this.setState({ data: this.state.data });
              console.log("createComment Done")
            }else{
                this.setState({ error: "Algo salio mal" });
            }
          }catch(error){
              this.setState({ error: error })
              console.log("error: " + error)
          }
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
      <Content>
        <Item rounded>
          <Input placeholder='Comentar' onChangeText={(texto) => this.setState({ texto })}
          value={this.state.texto}/>
            <Button transparent onPress={this._createNewComment.bind(this) }>
              <Icon active type="MaterialIcons" name="play-arrow" />
            </Button>
        </Item>
      </Content>
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
    return item.id.toString();
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
