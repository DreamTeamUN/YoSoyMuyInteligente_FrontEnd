import React, { Component } from 'react';
import { Dimensions, StyleSheet } from 'react-native';

const { height } = Dimensions.get('window');
const box_height = height / 2;

const styles = StyleSheet.create({

    boxText: {
        // backgroundColor: '#868ce1',
        height: box_height,
        justifyContent: 'flex-end',
        // alignItems: 'center',
    },
    headling: {
        color: '#515151',
        fontWeight: 'bold',
        fontSize: 42,
        textAlign: 'center',
    },
    containerButtons: {
        // backgroundColor: '#868ce1',
        height: box_height,
        // flex: 1,
        flexDirection: 'column',
        paddingTop: 60,
        paddingBottom: 70,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    button: {
        borderRadius: 50,
        marginBottom: 20,
        width: 260,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    buttonText: {
        padding: 10,
        color: 'white',
        fontSize: 25,
    },
    botonregistro: {
        backgroundColor: '#5D99C6'
    },
    botoniniciarsesion: {
        backgroundColor: '#90CAF9'
    }
});

export {styles as default};