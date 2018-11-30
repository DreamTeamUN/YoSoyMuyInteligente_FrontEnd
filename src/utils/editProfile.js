import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import { API_USERS } from '../config/const';
import { getID } from './home';
import { getToken } from './logIn';

export const editFullname = async (fullname) => {
    try {
        let ID = await getID();
        const API_USERS_PUT = `${API_USERS}/${ID}`;
        let response = await fetch(API_USERS_PUT, {
            method: 'PUT',
            headers: new Headers({
                "Authorization": 'Bearer ' + await getToken(),
                'Content-Type': 'application/json',
            }),
            body: JSON.stringify({
                "usuario": {
                    "nombre": fullname
                }
            })
        });
    } catch (error) {
        console.log("editFullname | Something went wrong")
    }
}

export const editPassword = async (password) => {
    try {
        let ID = await getID();
        const API_USERS_PUT = `${API_USERS}/${ID}`;
        let response = await fetch(API_USERS_PUT, {
            method: 'PUT',
            headers: new Headers({
                "Authorization": 'Bearer ' + await getToken(),
                'Content-Type': 'application/json',
            }),
            body: JSON.stringify({
                "usuario": {
                    "password": password
                }
            })
        });
    } catch (error) {
        console.log("editPassword | Something went wrong")
    }
}
