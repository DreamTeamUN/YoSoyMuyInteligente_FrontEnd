import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import { API_USERS } from '../config/const';
import { getID } from './home';
import { getToken } from './logIn';

export const putEditData = async (fullname) => {
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
                    "user": fullname
                }
            })
        });
    } catch (error) {
        console.log("putEditData | Something went wrong")
    }
}
