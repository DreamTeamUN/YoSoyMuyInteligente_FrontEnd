import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import { API_USERS } from '../config/const';
import { getID } from './home';

const FORUM_ID = 'id';
const FORUM_TITLE = 'title';
const FORUM_TEXT = 'text';
const FORUM_USER = 'user';
const FORUM_EMAIL = 'email';

export const createPost = async (titulo,texto,resumen) => {
    try {
        let ID = await getID();
        const API_ENTRADA_POST = `${API_USERS}/${ID}/entradas/0/entradas`;
        return await fetch(API_ENTRADA_POST, {
            method: 'POST',
            headers: new Headers({
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            }),
            body: JSON.stringify({
              "entrada": {
	                         "nivel_acceso_id": 0,
                            "titulo": titulo,
                            "resumen": resumen,
                            "texto": texto
                          }
            })
        });
    } catch (error) {
        console.log("cratePOst | Something went wrong")
    }
}

export const storeForDATA = async (id, title, text, user, email) => {
    try {
        await AsyncStorage.setItem(FORUM_ID, id.toString());
        await AsyncStorage.setItem(FORUM_TITLE, title);
        await AsyncStorage.setItem(FORUM_TEXT, text);
        await AsyncStorage.setItem(FORUM_USER, user);
        await AsyncStorage.setItem(FORUM_EMAIL, email);

    } catch (error) {
        console.log("something went wrong")
    }
}

export const getForID = async () => {
    try {
        let for_id = await AsyncStorage.getItem(FORUM_ID);
        console.log("getForID | Forum ID is: " + for_id)
        return for_id
    } catch (error) {
        console.log("Something went wrong")
    }
}
export const getForTITLE = async () => {
    try {
        let for_title = await AsyncStorage.getItem(FORUM_TITLE);
        console.log("getForTITLE | Forum title is: " + for_title)
        return for_title
    } catch (error) {
        console.log("Something went wrong")
    }
}
export const getForTEXT = async () => {
    try {
        let for_text = await AsyncStorage.getItem(FORUM_TEXT);
        console.log("getForTEXT | Forum text is: " + for_text)
        return for_text
    } catch (error) {
        console.log("Something went wrong")
    }
}
export const getForUSER = async () => {
    try {
        let for_user = await AsyncStorage.getItem(FORUM_USER);
        console.log("getForUSER | Forum user is: " + for_user)
        return for_user
    } catch (error) {
        console.log("Something went wrong")
    }
}
export const getForEMAIL = async () => {
    try {
        let for_email = await AsyncStorage.getItem(FORUM_EMAIL);
        console.log("getForEMAIL | Forum email is: " + for_email)
        return for_email
    } catch (error) {
        console.log("Something went wrong")
    }
}

export const getcomments= async () => {

    let ID = await getForID();

    let response = await fetch(`https://ysmiapi.herokuapp.com/entradas/3/${ID}/1`, {
        method: 'GET',
        headers: new Headers({
        }),
    });
    let res = await response.json();
    console.log(res);
    return res


}
