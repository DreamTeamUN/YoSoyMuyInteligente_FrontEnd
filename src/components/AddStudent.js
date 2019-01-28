import React, { Component } from 'react';
import {Alert, ToastAndroid} from 'react-native';
import {  View, Text, Button, Icon, DatePicker,
  Header, Left, Body, Title, Label, Form, Item, Input, Content, Container } from 'native-base';
import { DocumentPicker, ImagePicker } from 'expo'; //por usar
import styles from '../styles';
import {getID} from '../utils/home';
import {CREATE_STUDENT} from '../utils/createStudent'

export default class AddStudent extends Component {

  static navigationOptions = {
    header: null
  }

  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      nameStudent: '', // Nombre del estudiante a crear
      chosenDate: new Date(), //Fecha de nacimiento
      idFoto: '', //ID de la foto del estudiante
      idUsuario: '', //ID del usuario tutor
    };
    this.setDate = this.setDate.bind(this);
  }

  setDate(newDate) {
    this.setState({
      chosenDate: newDate
    });
  }

  async componentWillMount(){

    this.setState({
      idUsuario: await getID(),
    });
  }


  async createStudent(){
    try {

      this.setState({
        isLoading: true,
      });

      let response = await CREATE_STUDENT(this.state.idUsuario,
        this.state.nameStudent,
        this.state.chosenDate
      );

      let status = response.status;

      switch (status) {
        case 201:
          console.log(status + "Nuevo estudiante creado!!");
          ToastAndroid.show('Nuevo estudiante creado', ToastAndroid.SHORT);
          this.setState({ isLoading: false });
          this.props.navigation.state.params.onNavigateBack();
          this.props.navigation.goBack()
          break;

        default:
          console.log("Error creando estudiante, status code: " + status)
          Alert.alert("Error!!",
            "Lo sentimos, ocurrió un error durante la creación del estudiante, por favor intente de nuevo."
          );

          break;
      }

    } catch (error) {
      this.setState({isLoading: false});
      console.log("Error creando estudiante: " + error);
    }
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
            <Title>Agregar estudiante</Title>
          </Body>
        </Header>

        <Content>
          <Form style={styles.estudiante_TextInputContainer}>
            <Item floatingLabel>
              <Label>Nombre de usuario</Label>
              <Input
                maxLength={45}
                onChangeText={
                  (nameStudent) => this.setState({ nameStudent })}
              />
            </Item>

            <DatePicker
              defaultDate={new Date()}
              minimumDate={new Date(1930, 1, 1)}
              maximumDate={new Date(2050, 12, 31)}
              locale={"en"}
              timeZoneOffsetInMinutes={undefined}
              modalTransparent={false}
              animationType={"fade"}
              androidMode={"spinner"}
              placeHolderText="Fecha de nacimiento"
              textStyle={{ fontSize: 18, color: "green"}}
              placeHolderTextStyle={{ fontSize: 18, color: "#1F363D", textAlign:'left' }}
              onDateChange={this.setDate}
              disabled={false}
            />
          </Form>

          <View style={styles.buttonsContainer}>
            <View style={styles.button}>
              <Button iconLeft rounded style={styles.buttondark}
                onPress={this.createStudent.bind(this)}>
                <Icon type="MaterialIcons" name="done" />
                <Text style={{flex: 1}}>Finalizar Registro</Text>
              </Button>
            </View>
          </View>
        </Content>

      </Container>
    );
  }
}
