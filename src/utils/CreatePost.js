import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import { API_USERS } from '../config/const';
import { getID } from './home';

export const createPost = async (titulo,texto) => {
    try {
        let ID = await getID();
        const API_ENTRADA_POST = `${API_USERS}/${ID}/entradas/0/entradas`;
        let response = await fetch(API_ENTRADA_POST, {
            method: 'POST',
            headers: new Headers({
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            }),
            body: JSON.stringify({
              "entrada": {
	                         "nivel_acceso_id": 0,
                            "titulo": titulo,
                            "resumen": "resumen de entrada",
                            "texto": texto
                          }
            })
        });
    } catch (error) {
        console.log("cratePOst | Something went wrong")
    }
}
