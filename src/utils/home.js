import { AsyncStorage } from 'react-native';
import { API_USERS } from '../config/const';

const ID = 'id';
const USERNAME = 'user';
const FULLNAME = 'nombre';
const TIPO_USUARIO = 'tipo_usuario_id';
const FILE_URL = 'fileURL';

const storeUserData = async (id, username, fullname, tipo_usuario_id, fileURL) => {
    try {
        AsyncStorage.setItem(ID, id.toString())
        AsyncStorage.setItem(USERNAME, username);
        AsyncStorage.setItem(FULLNAME, fullname);
        AsyncStorage.setItem(TIPO_USUARIO, tipo_usuario_id.toString());
        AsyncStorage.setItem(FILE_URL, fileURL);
    } catch (error) {
        console.log("storeUserData | Something went wrong")
    }
}

export const setUserData = async (token) => {
    try {
        let response = await fetch(API_USERS, {
            method: 'GET',
            headers: new Headers({
                "Authorization": 'Bearer ' + token
            }),
        });
        let res = await response.json();
        storeUserData(res.id, res.user, res.nombre, res.tipo_usuario.id, res.archivo.ruta.url);
        return response
    } catch (error) {
        console.log("setUserData | Something went wrong")
    }
}



export const getUsername = async () => {
    try {
        let username = await AsyncStorage.getItem(USERNAME);
        console.log("getUsername | Username is: " + username)
        return username
    } catch (error) {
        console.log("getUsername | Something went wrong")
    }
}

export const getFullname = async () => {
    try {
        let fullname = await AsyncStorage.getItem(FULLNAME);
        console.log("getFullname | Fullname is: " + fullname)
        return fullname
    } catch (error) {
        console.log("getFullname | Something went wrong")
    }
}

export const getID = async () => {
    try {
        let id = await AsyncStorage.getItem(ID);
        console.log("getID | ID is: " + id)
        return id
    } catch (error) {
        console.log("getID | Something went wrong")
    }
}

export const getTipoUsuario = async () => {
    try {
        let tipoUsuario = await AsyncStorage.getItem(TIPO_USUARIO)
        return tipoUsuario
    } catch (error) {
        console.log("Get tipo user | Something went wrong")
    }
}

export const getFileUrl = async () => {
    try {
        let fileUrl = await AsyncStorage.getItem(FILE_URL);
        console.log("getFileUrl | FILE_URL is: " + fileUrl)
        return fileUrl
    } catch (error) {
        console.log("getFileUrl | Something went wrong")
    }
}