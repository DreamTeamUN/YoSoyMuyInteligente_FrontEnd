import React, { Component } from 'react';
import {Text, Fab, Icon, View, Container, Content, Header, Title, Button,
   Left, Body, Card, CardItem, Right} from 'native-base';
import styles from '../styles';
import {API_LIST_AULAS} from '../config/const';
import {getID} from '../utils/home';
import {getID_Docente} from '../utils/aulas';

export var idAula;

export default class ClassRoom extends Component {

  static navigationOptions = {
      header: null
  }

  constructor(props) {
    super(props);
    this.state = {
      active: 'true',
      isLoading: false,
      aulas: [],
      idUsuario: '',
      idDocente: '',
    };
  }
  
  async componentWillMount(){

    getID()
    
    .then(id => {
      this.setState({
        idUsuario: id,
      })
    })

    .then(() => {
      getID_Docente(this.state.idUsuario)
      
      .then((idDocente) => {
        this.setState({idDocente: idDocente})
      })
      
      .then(() => {
        this.listarAulas();
      })
    })
  }

  async listarAulas() {

    this.setState({isLoading: true});
    
    const URL = API_LIST_AULAS.concat("/" + this.state.idDocente).concat("/1");

    try {
      const response = await fetch(URL);
      const responseJson = await response.json();

      this.setState({
        aulas: responseJson,
        isLoading: false,
      });
    }
    catch (error) {
      console.error("Error en la consulta: " + error);
      this.setState({isLoading: false});
    }
  }

  componentDidMount() {
    
  }

  navegarClassroomView(id){
    idAula = id;
    this.props.navigation.navigate('ClassroomView');
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
          {this.state.aulas.map( (NewsData) => {
            return (
              <View key={NewsData.id} style = {styles.marginAddAula}>
                <Card>
                  <CardItem button onPress={() => this.navegarClassroomView(NewsData.id)}>
                    <Icon active name="home" />
                    <Text>{NewsData.nombre}</Text>
                  </CardItem>
                </Card>
              </View>
            )
          })}
        </Content>

        <Fab
          active={this.state.active}
          direction="up"
          containerStyle={{ }}
          style={{ backgroundColor: '#5067FF' }}
          position="bottomRight"
          onPress={() => this.props.navigation.navigate('AddClassRoom',
          {onNavigateBack: this.listarAulas.bind(this)})}>

          <Icon name="add" />
        </Fab>

      </Container>
    );
  }
}
