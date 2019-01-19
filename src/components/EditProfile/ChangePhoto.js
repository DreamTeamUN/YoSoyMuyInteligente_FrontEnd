import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { Container, Header, Content, Text, Button, Icon, Label, Form, Item, Input } from 'native-base';
import { ImagePicker } from 'expo';
import styles from '../../styles';
import { editPhoto } from '../../utils/editProfile';

export default class ChangePhoto extends Component {

    constructor(props) {
        super(props);
        this.state = {
            imageUri: null,
            imageType: null,
            imageName: null,
        };
    }

    async _sendNewData() {
        let photo = {
            uri: this.state.imageUri,
            type: this.state.imageType,
            name: this.state.imageName,
        }
        let formdata = new FormData();
        formdata.append('ruta', photo)
        editPhoto(formdata)
        console.log("editPhoto Done")
        this.props.navigation.goBack()
    }

    _pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: "Images",
            allowsEditing: true,
            aspect: [4, 4],
            quality: 1,
            // base64: true,
            // exif: true,
        });

        console.log("pickImage | result: ");
        console.log(result);

        if (!result.cancelled) {
            // ImagePicker saves the taken photo to disk and returns a local URI to it
            let localUri = result.uri;            
            let filename = localUri.split('/').pop();

            // Infer the type of the image
            let match = /\.(\w+)$/.exec(filename);
            let type = match ? `image/${match[1]}` : `image`;

            // Filename
            let finalName = `pedro${match[0]}`;

            this.setState({ imageUri: localUri });
            this.setState({ imageType: type });
            this.setState({ imageName:  finalName});
        }
    };

    render() {
        let image = this.state.imageUri;
        // return (
        //     <View>
        //         <Form style={styles.adult_TextInputContainer}>
        //             {/* <Item floatingLabel style={styles.editprofile_TextInput}>
        //                 <Label>Foto</Label>
        //                 <Input
        //                     maxLength={45}
        //                     onChangeText={(fullname) => this.setState({ fullname })}
        //                     value={this.state.fullname}
        //                 />
        //             </Item>
        //             <View>
        //                 <Button iconLeft rounded
        //                     style={styles.buttondark}
        //                     onPress={this._sendNewData.bind(this)}>
        //                     <Icon type="MaterialIcons" name="done" />
        //                     <Text>Enviar cambios</Text>
        //                 </Button>
        //             </View> */}
        //             <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        //                 <Button
        //                     onPress={this._pickImage}>
        //                     <Text>Pick an image from camera roll"</Text>
        //                 </Button>
        //                 {image &&
        //                     <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
        //             </View>
        //         </Form>
        //     </View>
        // );

        return (
            <View>
                <Form style={styles.adult_TextInputContainer}>
                    <Button iconLeft rounded
                        style={styles.buttondark}
                        onPress={this._pickImage.bind(this)}>
                        <Icon type="MaterialIcons" name="photo" />
                        <Text>Cargar foto desde la galeria</Text>
                    </Button>

                    <Image source={{ uri: this.state.imageUri }} style={{ width: 200, height: 200 }} />

                    <Button iconLeft rounded
                        style={styles.buttondark}
                        onPress={this._sendNewData.bind(this)}>
                        <Icon type="MaterialIcons" name="done" />
                        <Text>Subir foto</Text>
                    </Button>
                </Form>
            </View>
        );
    }
}
