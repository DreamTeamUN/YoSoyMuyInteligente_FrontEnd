import React, { Component } from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({

    // Common
    textContainer: {
        height: hp('50%'),
        justifyContent: 'center',
    },
    headling: {
        color: '#1F363D',
        fontSize: hp('10%'),
        textAlign: 'center',
        margin: hp('5%'),
    },
    buttonsContainer: {
      height: hp('50%'),
      flexDirection: 'column',
      paddingTop: 50,
      paddingBottom: 100,
      alignItems: 'center',
      justifyContent: 'flex-end',
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
        height: hp('50%'),
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
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-end',
        },
        practicas_buttoncontainer: {
          margin: 10,
          marginTop:30,
          marginLeft:40,
          marginRight:40,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        },
});

export { styles as default };
