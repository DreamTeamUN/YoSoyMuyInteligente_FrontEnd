import React, { Component } from 'react';
import { View, Alert, ToastAndroid } from 'react-native';
import { Container, Header, Content, Text, Button, Icon, Label, Form, Item, Input } from 'native-base';
import styles from '../../styles';
import { validatePassword } from '../../utils/validations';
import { editPassword } from '../../utils/editProfile';

export default class ChangePassword extends Component {

    constructor(props) {
        super(props);
        this.state = {
            password: '',
            password2: '',
        };
    }

    async _sendNewData() {
        if (validatePassword(this.state.password, this.state.password2)) {
            editPassword(this.state.password)
            console.log("editPassword Done")
            ToastAndroid.show('Contraseña cambiada', ToastAndroid.SHORT);
            this.props.navigation.goBack()
        }
    }

    render() {
        return (
            <View>
                <Form style={styles.adult_TextInputContainer}>
                    <Item floatingLabel style={styles.adult_TextInput}>
                        <Label>Nueva contraseña</Label>
                        <Input
                            secureTextEntry={true}
                            onChangeText={(password) => this.setState({ password })}
                            value={this.state.password}
                        />
                    </Item>
                    <Item floatingLabel style={styles.editprofile_TextInput}>
                        <Label>Confirmar contraseña</Label>
                        <Input
                            secureTextEntry={true}
                            onChangeText={(password2) => this.setState({ password2 })}
                            value={this.state.password2}
                        />
                    </Item>
                    <View>
                        <Button iconLeft rounded
                            style={styles.buttondark}
                            onPress={this._sendNewData.bind(this)}
                        >
                            <Icon type="MaterialIcons" name="done" />
                            <Text>Enviar cambios</Text>
                        </Button>
                    </View>
                </Form>
            </View>
        );
    }
}
