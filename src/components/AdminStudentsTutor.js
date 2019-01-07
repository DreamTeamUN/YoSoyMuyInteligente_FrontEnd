import React, { Component } from 'react';
import {Text, Fab, Icon, View, Container, Content, Header, Title, Button,
   Left, Body, Card, CardItem, Right} from 'native-base';
import styles from '../styles';
import {API_TUTORS} from '../config/const'
import {getID} from '../utils/home';
import {getID_TUTOR} from '../utils/createStudent';


export default class AdminStudentsTutor extends Component {

    static navigationOptions = {
        header: null
    }

    constructor(props) {
      super(props);
      this.state = {
        active: 'true',
        isLoading: false,
        idUsuario: '',
        idTutor: '',
        estudiantes: [],
      };
    }

    async componentWillMount(){

      this.setState({
        idUsuario: await getID(),
      });
    }

    async listarEstudiantes() {

      this.setState({isLoading: true});
      let id = await getID_TUTOR(this.state.idUsuario);
      this.setState({idTutor: id });
      const URL = API_TUTORS.concat("/" + id).concat("/estudiantes");

      try {
        const response = await fetch(URL);
        const responseJson = await response.json();

        this.setState({
          estudiantes: responseJson,
          isLoading: false,
        });
      }
      catch (error) {
        console.error("Error en la consulta: " + error);
        this.setState({isLoading: false});
      }
    }

    componentDidMount() {
      this.listarEstudiantes();
    }

    render() {

      let display = this.state.estudiantes.map(function (NewsData, index) {
          return (
              <View key={NewsData.id}>
                <Card>
                  <CardItem >
                    <Icon active name="person" />
                    <Text>{NewsData.nombre}</Text>
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
           onPress={() => this.props.navigation.navigate('AddStudent', 
           {onNavigateBack: this.listarEstudiantes.bind(this)})}>
           <Icon name="add" />
         </Fab>

        </Container>

      );
  }
}
