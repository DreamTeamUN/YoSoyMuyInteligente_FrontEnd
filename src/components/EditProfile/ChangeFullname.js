import React, { Component } from 'react';
import { View, Alert } from 'react-native';
import { Container, Header, Content, Text, Button, Icon, Label, Form, Item, Input } from 'native-base';
import styles from '../../styles';
import { editFullname } from '../../utils/editProfile';

export default class ChangeFullname extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fullname: '',
        };
    }

    async _sendNewData() {
        editFullname(this.state.fullname)
        console.log("editFullname Done")
        this.props.navigation.goBack()
    }

    render() {
        return (
            <View>
                    <Form style={styles.adult_TextInputContainer}>
                        <Item floatingLabel style={styles.editprofile_TextInput}>
                            <Label>Nombre completo</Label>
                            <Input
                                maxLength={45}
                                onChangeText={(fullname) => this.setState({ fullname })}
                                value={this.state.fullname}
                            />
                        </Item>
                        <View>
                            <Button iconLeft rounded
                                style={styles.buttondark}
                                onPress={this._sendNewData.bind(this)}>
                                <Icon type="MaterialIcons" name="done" />
                                <Text>Enviar cambios</Text>
                            </Button>
                        </View>
                    </Form>
                </View>
        );
    }
}
