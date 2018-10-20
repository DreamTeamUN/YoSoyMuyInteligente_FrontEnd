import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({

    // Common
    textContainer: {
        height: hp('40%'),
        justifyContent: 'center',
    },
    title: {
        color: '#1F363D',
        fontSize: hp('8%'),
        textAlign: 'center',
        margin: hp('5%'),
    },
    headling: {
        color: '#1F363D',
        fontSize: hp('6%'),
        textAlign: 'center',
        margin: hp('5%'),
    },
    buttonsContainer: {
      height: wp('50%'),
      alignItems: 'center',
      paddingTop: hp('20%'),
    },
    threebuttonsContainer: {
      height: hp('50%'),
      flexDirection: 'column',
      paddingTop: 60,
      paddingBottom: 10,
      alignItems: 'center',
    },
    buttonclear: {
        marginBottom: hp('3%'),
        backgroundColor: '#90CAF9',
    },
    buttondark: {
        marginBottom: hp('3%'),
        backgroundColor: '#5D99C6',
    },


    // Adult Sign Up
    adult_TextInputContainer: {
        marginTop: hp('10%'),
        marginLeft: wp('10%'),
        width: wp('80%'),
        alignItems: 'center',
    },
    adult_TextInput: {
        marginBottom: hp('1.5%'),
        backgroundColor: '#E9E9EF',
    },

    // Adult login
    login_TextInputContainer: {
        marginTop: hp('10%'),
        marginLeft: wp('10%'),
        width: wp('80%'),
        alignItems: 'center',
    },
    login_TextInput: {
        marginBottom: hp('1.5%'),
        backgroundColor: '#E9E9EF',
    },
    login_Toggle: {
      flexDirection: 'row',
    },
    login_ToggleText: {
      padding: 10,
      fontSize: 20,
    },

    //Adult/Teacher Home
    adulthome_TextContainer: {
        height: hp('30%'),
        justifyContent: 'center',
    },
    adulthome_buttonsContainer: {
      marginTop: hp('5%'),
      height: hp('70%'),
      flexDirection: 'column',
      alignItems: 'center',
    },




    // Practicas
        menupracticas: {
          margin: 10,
          marginTop:30,
          marginLeft:40,
          marginRight:40,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        },
        numbers: {
          fontSize: 40,
        }
});

export { styles as default };
