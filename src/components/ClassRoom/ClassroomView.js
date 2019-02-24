import React, { Component } from 'react';
import {Text, Fab, Icon, View, Container, Content, Header, Title, Button,
   Left, Body, Card, CardItem, Right} from 'native-base';
import styles from '../../styles';
import { idAula } from './Classroom';

export default class ClassroomView extends Component {

  static navigationOptions = {
      header: null
  }

  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      idAula: '',
    };
  }
  
  async componentWillMount(){
    this.setState({
        idAula: idAula
    })
  }

  
  componentDidMount() {
    
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
            <Title>Detalle Aula</Title>
          </Body>

        </Header>

        <Content style = {styles.maxHeight}>
            <Card>
                <CardItem>
                    <Text>
                        MUndo
                    </Text>
                    <Text>
                        {this.state.idAula}
                    </Text>

                </CardItem>
            </Card>

        </Content>

      </Container>
    );
  }
}