import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({

    // Common
    logoinicial: {
        width: wp('100%'),
        resizeMode: 'contain',
    },
    textContainer: {
        height: hp('40%'),
        justifyContent: 'center',
    },
    imageContainer: {
        height: hp('50%'),
        justifyContent: 'flex-end',
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
        justifyContent: 'center',
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
    buttonclearpra: {
        marginBottom: hp('3%'),
        width: wp('18%'),
        backgroundColor: '#90CAF9',
    },
    buttondarkpra: {
        marginBottom: hp('3%'),
        width: wp('18%'),
        backgroundColor: '#5D99C6',
    },
    buttonred: {
        marginBottom: hp('3%'),
        backgroundColor: '#DC143C',
    },
    buttonfb: {
        marginBottom: hp('3%'),
        backgroundColor: '#4267B2',
    },

    // Adult Sign Up
    adult_TextInputContainer: {
        height: hp('50%'),
        marginTop: hp('1.0%'),
        marginLeft: wp('7%'),
        width: wp('80%'),
        alignItems: 'center',
    },
    adult_TextInput: {
        marginBottom: hp('0.5%'),
        backgroundColor: '#E9E9EF',
    },
    adult_ButtonsContainer: {
        height: hp('20%'),
        width: wp('100%'),
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: hp('5%'),
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
    googleIconViewStyle: {
    height: 21,
    width: 21 ,
    marginLeft: wp('5%'),
  },
  fbIconViewStyle: {
  height: 22,
  width: 22 ,
  marginLeft: wp('5%'),
},

    //Adult/Teacher Home
    homeAdult_TextContainer: {
        height: hp('30%'),
        justifyContent: 'center',
    },
    homeAdult_buttonsContainer: {
        marginTop: hp('5%'),
        height: hp('70%'),
        flexDirection: 'column',
        alignItems: 'center',
    },
    login_buttonsContainer: {
        marginTop: hp('1%'),
        height: hp('70%'),
        flexDirection: 'column',
        alignItems: 'center',
    },

    // Practicas
    textopracticas: {
        marginBottom: hp('3%'),
        width: wp('100%'),
        fontSize: wp('13%'),
        textAlign: 'center',

    },
    menupracticas: {
      
        paddingTop: hp('3%'),
        justifyContent: 'space-between',
    },
    filapracticas: {
        width: wp('90%'),
        marginTop: hp('2%'),
        marginLeft: hp('2%'),
        marginRight: hp('2%'),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    numbers: {
        fontSize: wp('8%'),
        fontWeight: 'bold',
        width: wp('18%'),
        textAlign: 'center',
    }
});

export { styles as default };
