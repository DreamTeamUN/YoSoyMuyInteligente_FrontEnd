import React, { Component } from 'react';
import { Alert, StyleSheet, TouchableNativeFeedback, View, Switch, TextInput } from 'react-native';
import { Container, Header, Content, Text, List, ListItem, Button } from 'native-base';
import styles from '../styles';
export var WEEK;

export default class Practices extends Component {

penWeek(week){
    WEEK = week;
    this.props.navigation.navigate('Sentence');
}

  render() {
    return (
      <View style={styles.menupracticas}>
        <Text style={styles.textopracticas}>Prácticas</Text>

          <View style={styles.filapracticas}>
            <View style={styles.button}>
              <Button style={styles.buttonclearpra}
                onPress={() => this.penWeek(1)}>
                <Text style={styles.numbers}>1</Text>
              </Button>
            </View>

            <View style={styles.button}>
              <Button style={styles.buttondarkpra}
                onPress={() => this.penWeek(2)}>
                <Text style={styles.numbers}>2</Text>
              </Button>
            </View>


            <View style={styles.button}>
              <Button style={styles.buttonclearpra}
                onPress={() => this.penWeek(3)}>
                <Text style={styles.numbers}>3</Text>
              </Button>
            </View>

            <View style={styles.button}>
              <Button style={styles.buttondarkpra}
                onPress={() => this.penWeek(4)}>
                <Text style={styles.numbers}>4</Text>
              </Button>
            </View>
          </View>

          <View style={styles.filapracticas}>
            <View style={styles.button}>
              <Button style={styles.buttonclearpra}
                onPress={() => this.penWeek(5)}>
                <Text style={styles.numbers}>5</Text>
              </Button>
            </View>

            <View style={styles.button}>
              <Button style={styles.buttondarkpra}
                onPress={() => this.penWeek(6)}>
                <Text style={styles.numbers}>6</Text>
              </Button>
            </View>


            <View style={styles.button}>
              <Button style={styles.buttonclearpra}
                onPress={() => this.penWeek(7)}>
                <Text style={styles.numbers}>7</Text>
              </Button>
            </View>

            <View style={styles.button}>
              <Button style={styles.buttondarkpra}
                onPress={() => this.penWeek(8)}>
                <Text style={styles.numbers}>8</Text>
              </Button>
            </View>
          </View>

          <View style={styles.filapracticas}>
            <View style={styles.button}>
              <Button style={styles.buttonclearpra}
                onPress={() => this.penWeek(9)}>
                <Text style={styles.numbers}>9</Text>
              </Button>
            </View>

            <View style={styles.button}>
              <Button style={styles.buttondarkpra}
                onPress={() => this.penWeek(10)}>
                <Text style={styles.numbers}>10</Text>
              </Button>
            </View>


            <View style={styles.button}>
              <Button style={styles.buttonclearpra}
                onPress={() => this.penWeek(11)}>
                <Text style={styles.numbers}>11</Text>
              </Button>
            </View>

            <View style={styles.button}>
              <Button style={styles.buttondarkpra}
                onPress={() => this.penWeek(12)}>
                <Text style={styles.numbers}>12</Text>
              </Button>
            </View>
          </View>

          <View style={styles.filapracticas}>
            <View style={styles.button}>
              <Button style={styles.buttonclearpra}
                onPress={() => this.penWeek(13)}>
                <Text style={styles.numbers}>13</Text>
              </Button>
            </View>

            <View style={styles.button}>
              <Button style={styles.buttondarkpra}
                onPress={() => this.penWeek(14)}>
                <Text style={styles.numbers}>14</Text>
              </Button>
            </View>


            <View style={styles.button}>
              <Button style={styles.buttonclearpra}
                onPress={() => this.penWeek(15)}>
                <Text style={styles.numbers}>15</Text>
              </Button>
            </View>

            <View style={styles.button}>
              <Button style={styles.buttondarkpra}
                onPress={() => this.penWeek(16)}>
                <Text style={styles.numbers}>16</Text>
              </Button>
            </View>
          </View>

          <View style={styles.filapracticas}>
            <View style={styles.button}>
              <Button style={styles.buttonclearpra}
                onPress={() => this.penWeek(17)}>
                <Text style={styles.numbers}>17</Text>
              </Button>
            </View>

            <View style={styles.button}>
              <Button style={styles.buttondarkpra}
                onPress={() => this.penWeek(18)}>
                <Text style={styles.numbers}>18</Text>
              </Button>
            </View>


            <View style={styles.button}>
              <Button style={styles.buttonclearpra}
                onPress={() => this.penWeek(19)}>
                <Text style={styles.numbers}>19</Text>
              </Button>
            </View>

            <View style={styles.button}>
              <Button style={styles.buttondarkpra}
                onPress={() => this.penWeek(20)}>
                <Text style={styles.numbers}>20</Text>
              </Button>
            </View>
          </View>

          <View style={styles.filapracticas}>
            <View style={styles.button}>
              <Button style={styles.buttonclearpra}
                onPress={() => this.penWeek(21)}>
                <Text style={styles.numbers}>21</Text>
              </Button>
            </View>

            <View style={styles.button}>
              <Button style={styles.buttondarkpra}
                onPress={() => this.penWeek(22)}>
                <Text style={styles.numbers}>22</Text>
              </Button>
            </View>


            <View style={styles.button}>
              <Button style={styles.buttonclearpra}
                onPress={() => this.penWeek(23)}>
                <Text style={styles.numbers}>23</Text>

              </Button>
            </View>
            <View style={styles.button}>
              <Button style={styles.buttondarkpra}
                onPress={() => this.penWeek(24)}>
                <Text style={styles.numbers}>24</Text>
              </Button>
            </View>
          </View>

      </View>
    );
  }
}
