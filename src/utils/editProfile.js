import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import { API_USERS } from '../config/const';
import { getID } from './home';
import { getToken } from './logIn';

const editData = async (body) => {
    try {
        let ID = await getID();
        const API_USERS_PUT = `${API_USERS}/${ID}`;
        let response = await fetch(API_USERS_PUT, {
            method: 'PUT',
            headers: new Headers({
                "Authorization": 'Bearer ' + await getToken(),
                'Content-Type': 'application/json',
            }),
            body: body
        });
    } catch (error) {
        console.log("editData | Something went wrong")
    }
}

export const editFullname = async (fullname) => {
    let body = JSON.stringify({
        "usuario": {
            "nombre": fullname
        }
    })
    editData(body)
}

export const editPassword = async (password) => {
    let body = JSON.stringify({
        "usuario": {
            "password": password
        }
    })
    editData(body)
}

export const editBirthdate = async (birthdate) => {
    let body = JSON.stringify({
        "usuario": {
            "fecha_nacimiento": birthdate
        }
    })
    editData(body)
}
