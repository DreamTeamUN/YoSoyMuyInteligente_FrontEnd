import React, { Component } from 'react';
import { Alert, StyleSheet, TouchableNativeFeedback, View, Switch, TextInput } from 'react-native';
import { Container, Header, Content, Text, List, ListItem, Button } from 'native-base';
import styles from '../styles';
var numWeek;


openWeek(week){
  numWeek = week;
  this.props.navigation.navigate('Sentence');
}


export default class Practices extends Component {

  render() {
    return (
      <View style={styles.menupracticas}>
        <Text style={styles.textopracticas}>Prácticas</Text>

          <View style={styles.filapracticas}>
            <View style={styles.button}>
              <Button style={styles.buttonclearpra}
                onPress={() => this.props.navigation.navigate('Sentence')}>
                <Text style={styles.numbers}>1</Text>
              </Button>
            </View>

            <View style={styles.button}>
              <Button style={styles.buttondarkpra}
                onPress={() => this.props.navigation.navigate('Sentence')}>
                <Text style={styles.numbers}>2</Text>
              </Button>
            </View>


            <View style={styles.button}>
              <Button style={styles.buttonclearpra}
                onPress={() => this.props.navigation.navigate('Sentence')}>
                <Text style={styles.numbers}>3</Text>
              </Button>
            </View>

            <View style={styles.button}>
              <Button style={styles.buttondarkpra}
                onPress={() => this.props.navigation.navigate('Sentence')}>
                <Text style={styles.numbers}>4</Text>
              </Button>
            </View>
          </View>

          <View style={styles.filapracticas}>
            <View style={styles.button}>
              <Button style={styles.buttonclearpra}
                onPress={() => this.props.navigation.navigate('Sentence')}>
                <Text style={styles.numbers}>5</Text>
              </Button>
            </View>

            <View style={styles.button}>
              <Button style={styles.buttondarkpra}
                onPress={() => this.props.navigation.navigate('Sentence')}>
                <Text style={styles.numbers}>6</Text>
              </Button>
            </View>


            <View style={styles.button}>
              <Button style={styles.buttonclearpra}
                onPress={() => this.props.navigation.navigate('Sentence')}>
                <Text style={styles.numbers}>7</Text>
              </Button>
            </View>

            <View style={styles.button}>
              <Button style={styles.buttondarkpra}
                onPress={() => this.props.navigation.navigate('Sentence')}>
                <Text style={styles.numbers}>8</Text>
              </Button>
            </View>
          </View>

          <View style={styles.filapracticas}>
            <View style={styles.button}>
              <Button style={styles.buttonclearpra}
                onPress={() => this.props.navigation.navigate('Sentence')}>
                <Text style={styles.numbers}>9</Text>
              </Button>
            </View>

            <View style={styles.button}>
              <Button style={styles.buttondarkpra}
                onPress={() => this.props.navigation.navigate('Sentence')}>
                <Text style={styles.numbers}>10</Text>
              </Button>
            </View>


            <View style={styles.button}>
              <Button style={styles.buttonclearpra}
                onPress={() => this.props.navigation.navigate('Sentence')}>
                <Text style={styles.numbers}>11</Text>
              </Button>
            </View>

            <View style={styles.button}>
              <Button style={styles.buttondarkpra}
                onPress={() => this.props.navigation.navigate('Sentence')}>
                <Text style={styles.numbers}>12</Text>
              </Button>
            </View>
          </View>

          <View style={styles.filapracticas}>
            <View style={styles.button}>
              <Button style={styles.buttonclearpra}
                onPress={() => this.props.navigation.navigate('Sentence')}>
                <Text style={styles.numbers}>13</Text>
              </Button>
            </View>

            <View style={styles.button}>
              <Button style={styles.buttondarkpra}
                onPress={() => this.props.navigation.navigate('Sentence')}>
                <Text style={styles.numbers}>14</Text>
              </Button>
            </View>


            <View style={styles.button}>
              <Button style={styles.buttonclearpra}
                onPress={() => this.props.navigation.navigate('Sentence')}>
                <Text style={styles.numbers}>15</Text>
              </Button>
            </View>

            <View style={styles.button}>
              <Button style={styles.buttondarkpra}
                onPress={() => this.props.navigation.navigate('Sentence')}>
                <Text style={styles.numbers}>16</Text>
              </Button>
            </View>
          </View>

          <View style={styles.filapracticas}>
            <View style={styles.button}>
              <Button style={styles.buttonclearpra}
                onPress={() => this.props.navigation.navigate('Sentence')}>
                <Text style={styles.numbers}>17</Text>
              </Button>
            </View>

            <View style={styles.button}>
              <Button style={styles.buttondarkpra}
                onPress={() => this.props.navigation.navigate('Sentence')}>
                <Text style={styles.numbers}>18</Text>
              </Button>
            </View>


            <View style={styles.button}>
              <Button style={styles.buttonclearpra}
                onPress={() => this.props.navigation.navigate('Sentence')}>
                <Text style={styles.numbers}>19</Text>
              </Button>
            </View>

            <View style={styles.button}>
              <Button style={styles.buttondarkpra}
                onPress={() => this.props.navigation.navigate('Sentence')}>
                <Text style={styles.numbers}>20</Text>
              </Button>
            </View>
          </View>

          <View style={styles.filapracticas}>
            <View style={styles.button}>
              <Button style={styles.buttonclearpra}
                onPress={() => this.props.navigation.navigate('Sentence')}>
                <Text style={styles.numbers}>21</Text>
              </Button>
            </View>

            <View style={styles.button}>
              <Button style={styles.buttondarkpra}
                onPress={() => this.props.navigation.navigate('Sentence')}>
                <Text style={styles.numbers}>22</Text>
              </Button>
            </View>


            <View style={styles.button}>
              <Button style={styles.buttonclearpra}
                onPress={() => this.props.navigation.navigate('Sentence')}>
                <Text style={styles.numbers}>23</Text>
              </Button>
            </View>

            <View style={styles.button}>
              <Button style={styles.buttondarkpra}
                onPress={() => this.props.navigation.navigate('Sentence')}>
                <Text style={styles.numbers}>24</Text>
              </Button>
            </View>
          </View>

      </View>
    );
  }
}
