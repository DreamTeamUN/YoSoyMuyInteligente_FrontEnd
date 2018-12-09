import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import { API_USERS } from '../config/const';

const ID = 'id';
const USERNAME = 'user';
const TIPO_USUARIO = 'tipo_usuario_id';

const storeUserData = async (id, username, tipo_usuario_id) => {
    try {
        AsyncStorage.setItem(ID, id.toString())
        AsyncStorage.setItem(USERNAME, username);
        AsyncStorage.setItem(TIPO_USUARIO, tipo_usuario_id.toString());
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
        storeUserData(res.id, res.user, res.tipo_usuario_id);
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

export const getID = async () => {
    try {
        let id = await AsyncStorage.getItem(ID);
        console.log("getID | ID is: " + id)
        return id
    } catch (error) {
        console.log("getID | Something went wrong")
    }
}
