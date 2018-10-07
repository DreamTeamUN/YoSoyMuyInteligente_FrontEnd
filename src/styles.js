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
    },
    headling: {
        color: '#1F363D',
        fontSize: 42,
        textAlign: 'center',
    },
    buttonsContainer: {
      height: box_height,
      flexDirection: 'column',
      paddingTop: 50,
      paddingBottom: 100,
      alignItems: 'center',
      justifyContent: 'flex-end',
    },

    button: {
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },

    buttonclear: {
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: '#90CAF9',
    },

    buttondark: {
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: '#5D99C6',
    },

    // Adult Sign Up
    adult_TextInputContainer: {
        paddingTop: 80,
        alignItems: 'center',
    },
    adult_TextInput: {
        marginBottom: 20,
        height: 45,
        width: 300,
        backgroundColor: '#E9E9EF',
    },

    // LogInTypeUser
    loginTU_TextContainer: {
        padding: 30,
    },
    loginTU_ContainerButtons: {
        height: box_height,
        flexDirection: 'column',
        paddingTop: 60,
        paddingBottom: 10,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },

    // Home
        home_TextContainer: {
            padding: 30,
          },

        home_ContainerButtons: {
            height: box_height,
            flexDirection: 'column',
            paddingTop: 60,
            paddingBottom: 20,
            alignItems: 'center',
            justifyContent: 'flex-end',
        },

});


export { styles as default };
