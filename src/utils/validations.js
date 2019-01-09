import React, { Component } from 'react';
import { Alert } from 'react-native';
// import axios from 'axios';
// import {  } from '../config/const';

function validateUsername(username) {
    formatotexto = /^[a-zA-Z0-9]+$/;
    if (!formatotexto.test(username)) {
        Alert.alert("Por favor revise que escribió un nombre de usuario alfanumérico.");
        return false
    }
    return true
}

export function validatePassword(password, password2) {
    if (password != password2) {
        Alert.alert("Las contraseñas ingresadas no coinciden.");
        return false
    }
    if (password.length < 6) {
        Alert.alert("La longitud de su contraseña debe ser de al menos 6 caracteres.");
        return false
    }
    return true
}

function validateEmail(email) {
    formatomail = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-])+/;
    if (!formatomail.test(email)) {
        Alert.alert("Por favor revise que escribió su correo correctamente.");
        return false
    }
    return true
}

// Validación Formulario
export function validateForm(username, password, password2, email) {
    formatotexto = /^[a-zA-Z0-9]+$/;
    formatomail = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-])+/;

    if (!(formatotexto.test(username))) {
        Alert.alert('No se puede completar el registro. Por favor revise que escribió un nombre de usuario alfanumérico.');
    } else if (!(password == password2)) {
        Alert.alert('No se puede completar el registro. Las contraseñas ingresadas no coinciden.');
    } else if (!(password.length >= 6)) {
        Alert.alert('No se puede completar el registro. La longitud de su contraseña debe ser de al menos 6 caracteres.');
    } else if (!(formatomail.test(email))) {
        Alert.alert('No se puede completar el registro. Por favor revise que escribió su correo correctamente.');
    }


    if (formatotexto.test(username)
        && formatomail.test(email)
        && password == password2
        && password.length >= 6) {
        return true;
    } else {
        return false;
    }


};