import React, { Component } from 'react';
import { Alert, Dimensions, StyleSheet, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, View } from 'react-native';
import styles from '../styles';
import Expo from "expo";
import { Container, Header, Title, Content, Footer, FooterTab, Button, Grid, Col, Row, Left, Right, Body, Icon, Text } from 'native-base';

export default class Main extends Component {
  // static navigationOptions = {
  //   title: 'Login',
  // };
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
    });
    this.setState({ loading: false });
  }

 render() {
   if (this.state.loading) {
      return <Expo.AppLoading />;
    }
   return (
    <Container>
      <Content>
        <Grid>
          <Row>
            <Text style={{fontSize:52, textAlign: 'center', textAlignVertical: 'center', margin:10}}>
                Yo Soy Muy Inteligente UN</Text>
          </Row>

          <Row>
            <Button iconLeft style = {{margin:10}} onPress={() => this.props.navigation.navigate('MainSignUp')}>
                <Icon name="person-add" />

                <Text>Registro</Text>
            </Button>

            <Button iconLeft style = {{margin:10}} onPress={() => this.props.navigation.navigate('MainSignUp')}>
                <Icon name="person" />
                <Text>Iniciar Sesión</Text>
            </Button>
          </Row>
        </Grid>
      </Content>
    </Container>

      //
      // <View >
      //
      //   <View style={styles.textContainer}>
      //     <Text style={{fontSize:52, textAlign: 'center', textAlignVertical: 'center'}}>
      //       Yo Soy Muy Inteligente UN</Text>
      //   </View>
      //
      //   <View style={styles.buttonsContainer}>
      //
      //       <View style={styles.button}>
      //
      //
      //         <Button
      //           mode="contained"
      //           icon="person-add"
      //           onPress={() => this.props.navigation.navigate('MainSignUp')}>
      //           Registro</Button>
      //       </View>
      //
      //
      //       <View style={styles.button}>
      //         <Button
      //           mode="contained"
      //           icon="person"
      //           color='#90CAF9'
      //           onPress={() => this.props.navigation.navigate('LogInTypeUser')}>
      //           Iniciar Sesión</Button>
      //       </View>
      //
      //   </View>
      // </View>
    );
  }
}

// const styles = StyleSheet.create({
//   nombre: {
//     atributo: valor,
//   },
// });
