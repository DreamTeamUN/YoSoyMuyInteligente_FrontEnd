import React, { Component } from 'react';
import { Dimensions, StyleSheet } from 'react-native';

const { height } = Dimensions.get('window');
const box_height = height / 2;

const styles = StyleSheet.create({

    // Common
    textContainer: {
        // backgroundColor: '#868ce1',
        height: box_height,
        justifyContent: 'center',
        // alignItems: 'center',
    },
    headling: {
        color: '#515151',
        fontWeight: 'bold',
        fontSize: 42,
        textAlign: 'center',
    },
    buttonsContainer: {
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
        marginBottom: 20,
        width: 260,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },


    // Adult Sign Up
    adult_TextInputContainer: {
        padding: 10,
        alignItems: 'center',
    },
    adult_TextInput: {
        fontSize: 20,
        height: 45,
        width: 200,
    },

    // LogInTypeUser
    loginTU_TextContainer: {
        padding: 30,
    },
    loginTU_ContainerButtons: {
        // backgroundColor: '#868ce1',
        height: box_height,
        // flex: 1,
        flexDirection: 'column',
        paddingTop: 60,
        paddingBottom: 10,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },

});

export { styles as default };
