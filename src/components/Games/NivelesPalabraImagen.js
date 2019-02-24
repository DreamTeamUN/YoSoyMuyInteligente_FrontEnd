import React, { Component } from 'react';
import {Text, Icon, View, Container, Content, Header, Title, Button,
   Left, Body, Card, CardItem, Right} from 'native-base';
import styles from '../../styles';
import {getID} from '../../utils/home';
import {API} from '../../config/const'
export var idNivel;

export default class NivelesPalabraImagen extends Component {

  static navigationOptions = {
    header: null
  }

  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      idUsuario: '',
      lecciones: [],
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
        this.listarLecciones()
    })
  }


  componentDidMount() {
    
  }

  async listarLecciones (){
    this.setState({isLoading: true});
    
    const URL = API.concat("/programas").concat("/1").concat("/leccions");

    try {
      const response = await fetch(URL);
      const responseJson = await response.json();

      this.setState({
        lecciones: responseJson,
        isLoading: false,
      });
    }
    catch (error) {
      console.error("Error en la consulta de lecciones: " + error);
      this.setState({isLoading: false});
    }
  }
  
  navegarPalabraImagen(semana) {
    idNivel = semana;
    this.props.navigation.navigate('PalabraImagen')
  }

  render() {

    if (this.state.isLoading) {
      return (
        <View>
          <View style={styles.home_TextContainer}>
            <Text style={styles.headling}>Cargando...</Text>
          </View>
        </View>
      );
    }

    return (
      <Container>
        <Header style = {styles.headerStyle}>

          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>

          <Body>
            <Title>Niveles</Title>
          </Body>

        </Header>

        <Content style = {styles.maxHeight}>

            <Text style = {styles.textoNiveles}> Selecciona un nivel :D </Text>
            
            {this.state.lecciones.map(NewsData => {
              return (
                <View key={NewsData.id} style = {styles.marginAddAula}>
                  <Card>
                    <CardItem button onPress = {() => this.navegarPalabraImagen(NewsData.semana)}>
                        <Icon type="MaterialIcons" name="videogame-asset" />
                        <Text>{"Nivel ".concat(NewsData.semana) }</Text>
                    </CardItem>
                  </Card>
                </View>
              )
            })
          }

        </Content>
      </Container>

    );
  }
}
