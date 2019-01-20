import React, { Component } from 'react';
import { View, Alert, ToastAndroid } from 'react-native';
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
        ToastAndroid.show('Fecha de nacimiento cambiada', ToastAndroid.SHORT);
        this.props.navigation.goBack()

    }

    render() {
        return (
            <View>
            <View style={styles.editDate}>
                    <DatePicker
                        defaultDate={new Date()}
                        minimumDate={new Date(1930, 1, 1)}
                        maximumDate={new Date(2030, 12, 31)}
                        locale={"co"}
                        timeZoneOffsetInMinutes={undefined}
                        modalTransparent={true}
                        animationType={"fade"}
                        androidMode={"default"}
                        placeHolderText="Presione aquí para seleccionar una fecha"
                        textStyle={{ color: "green" }}
                        placeHolderTextStyle={{ color: "#696969" }}
                        onDateChange={(newDate) => this.setState({ birthdate: newDate })}
                    />

                    <Text>
                        Se ha elegido la siguiente fecha: {this.state.birthdate.toString().substr(4, 12)}.
                    </Text>
                    </View>
                    <View style={styles.simplecenter}>
                    <View>
                        <Button iconLeft rounded
                            style={styles.buttondark}
                            onPress={this._sendNewData.bind(this)}>
                            <Icon type="MaterialIcons" name="done" />
                            <Text>Enviar cambios</Text>
                        </Button>
                    </View>
                    </View>
                </View>
        );
    }
}
