import React, { Component } from 'react';
import { View, Alert } from 'react-native';
import { Container, Header, Content, Text, Button, Icon, Label, Form, Item, Input, DatePicker } from 'native-base';
import styles from '../../styles';
import { validatePassword } from '../../utils/validations';
import { editBirthdate } from '../../utils/editProfile';

export default class ChangeBirthdate extends Component {

    constructor(props) {
        super(props);
        this.state = {
            birthdate: new Date(),
        };
    }

    async _sendNewData() {
        let year = this.state.birthdate.getFullYear()
        let month = this.state.birthdate.getMonth() + 1
        let day = this.state.birthdate.getDate()
        // let date = year + "-" + month + "-" + day
        editBirthdate(year + "-" + month + "-" + day)
        console.log("editBirthdate Done")
        this.props.navigation.goBack()

    }

    render() {
        return (
            <Container>
                <Content>
                    <DatePicker
                        defaultDate={new Date(2018, 4, 4)}
                        minimumDate={new Date(2018, 1, 1)}
                        maximumDate={new Date(2018, 12, 31)}
                        locale={"co"}
                        timeZoneOffsetInMinutes={undefined}
                        modalTransparent={false}
                        animationType={"fade"}
                        androidMode={"default"}
                        placeHolderText="Select date"
                        textStyle={{ color: "green" }}
                        placeHolderTextStyle={{ color: "#d3d3d3" }}
                        onDateChange={(newDate) => this.setState({ birthdate: newDate })}
                    />
                    <Text>
                        Date: {this.state.birthdate.toString().substr(4, 12)}
                    </Text>
                    <View>
                        <Button iconLeft rounded
                            style={styles.buttondark}
                            onPress={this._sendNewData.bind(this)}
                        >
                            <Icon type="MaterialIcons" name="done" />
                            <Text>Enviar cambios</Text>
                        </Button>
                    </View>

                </Content>
            </Container>
        );
    }
}
