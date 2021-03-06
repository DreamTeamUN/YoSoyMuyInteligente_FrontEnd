import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({

  headerStyle: {
    backgroundColor: '#5D99C6',
    height: hp('14%'),
    zIndex: 10,
    paddingTop: hp('3.5%'),
  },

  maxHeight: {
    flex: 1,
  },

  marginAddAula: {
    marginTop: hp('1%'),
    marginLeft: wp('4%'),
    marginRight: wp('4%'),
  },

  buttonAceptarAula: {
    backgroundColor: '#5D99C6',
    margin: wp('5%'),
  },

  logoinicial: {
    width: wp('100%'),
    resizeMode: 'contain',
  },
  textContainer: {
    height: hp('40%'),
    justifyContent: 'center',
  },
  imageContainer: {
    height: hp('40%'),
    justifyContent: 'flex-end',
  },

  uploadImageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

    uploadImage: {
    height: hp('45%'),
    width: hp('45%'),
    marginTop: hp('5%'),
    marginBottom: hp('5%'),
    marginRight: wp('3%'),
    marginLeft: wp('3%'),
  },

  title: {
    color: '#1F363D',
    fontSize: hp('8%'),
    textAlign: 'center',
    margin: hp('5%'),
  },

  subtitle: {
    color: '#1F363D',
    fontSize: hp('4%'),
    textAlign: 'center',
    margin: hp('3%'),
  },

  headling: {
    color: '#1F363D',
    fontSize: hp('6%'),
    textAlign: 'center',
    margin: hp('5%'),
  },
  singlebuttonContainer: {
    height: hp('10%'),
    alignItems: 'center',
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
    alignItems: 'flex-start',
    flexDirection: 'column',
  },
  buttondark: {
    marginBottom: hp('3%'),
    backgroundColor: '#5D99C6',
    alignItems: 'flex-start',
    flexDirection: 'column',
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
    alignItems: 'flex-start',
    flexDirection: 'column',
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
    width: 21,
    marginLeft: wp('5%'),
  },
  fbIconViewStyle: {
    height: 22,
    width: 22,
    marginLeft: wp('5%'),
  },

  //Adult/Teacher Home
  homeAdult_TextContainer: {
    height: hp('40%'),
    justifyContent: 'center',
  },

  viewButtonHome: {
    width: wp('80%'),
    marginLeft: wp('3%'),
    marginRight: wp('3%'),
  },

  homeAdult_buttonsContainer: {
    marginTop: hp('3%'),
    height: hp('55%'),
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

  textSentence: {
    width: hp('95%'),
    fontSize: 60,
    textAlign: 'center',
    margin: wp('5%'),
  },

  containerSentence: {
    width: hp('100%'),
    height: wp('100%'),
    justifyContent: 'center',
    alignItems: 'center',
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
  },
  commentContainer: {
    padding: 5,
    flexDirection: 'row'
  },
  left: {
    padding: 5
  },
  image: {
    height: 40,
    width: 40,
    borderRadius: 40
  },
  right: {
    flex: 1,
    padding: 5
  },
  rightContent: {
    borderRadius: 10,
    padding: 5,
    backgroundColor: '#f1f3f6'
  },
  rightContentTop: {
    flexDirection: 'row'
  },

  name: {
    fontWeight: 'bold',
    paddingBottom: 5
  },
  editIcon: {
    flex: 1,
    alignItems: 'flex-end',
  },
  body: {
    paddingBottom: 10
  },
  rightActionBar: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  time: {
    fontSize: 12,
    paddingLeft: 5,
    color: '#9B9B9B',
    fontStyle: 'italic'
  },
  actionText: {
    color: '#9B9B9B',
    fontWeight: 'bold'
  },
  repliedSection: {
    width: 180,
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  repliedImg: {
    height: 20,
    width: 20,
    borderRadius: 20
  },
  repliedUsername: {
    color: '#9B9B9B',
    fontWeight: 'bold'
  },
  repliedText: {
    color: '#9B9B9B',
  },
  repliedCount: {
    color: '#9B9B9B',
    fontSize: 12
  },
  inputSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  submit: {
    padding: 10,
  },
  input: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
    color: '#424242',
  },
  likeNr: {
    fontWeight: 'normal',
    fontSize: 12
  },
  likeHeader: {
    textAlign: 'center',
    padding: 10,
    fontWeight: 'bold'

  },
  likeButton: {
    margin: 10,
    alignItems: 'center',

  },
  likeContainer: {
    padding: 10,
    width: 200,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',

  },
  likeImage: {
    width: 50,
    height: 50,
    borderRadius: 50
  },
  likename: {
    fontWeight: 'bold',
    fontSize: 14
  },
  editModalContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  editModal: {
    backgroundColor: "white",
    width: 400,
    height: 300,
    borderWidth: 2,
    borderColor: "silver"
  },
  editButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    height: 40,
    width: 80,
    paddingLeft: 5,
    paddingRight: 5,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "silver",
    borderRadius: 5,
    margin: 10
  },

  //Editarperfil
  editprofile_TextInput: {
    marginBottom: hp('4%'),
    backgroundColor: '#E9E9EF',
  },

  estudiante_TextInputContainer: {
    height: hp('50%'),
    marginTop: hp('1.0%'),
    marginLeft: wp('7%'),
    width: wp('80%'),
    flex: 1,
  },

  editDate: {
    alignItems: 'center',
    marginTop: hp('4%'),
    marginBottom: hp('4%'),
  },

  simplecenter: {
    width: wp('100%'),
    alignItems: 'center',
  },

  rootf: {
    backgroundColor: "#ffffff",
    marginTop: 10,
  },
  containerf: {
    paddingLeft: 19,
    paddingRight: 16,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  contentf: {
    marginLeft: 16,
    flex: 1,
  },
  contentHeaderf: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6
  },
  separatorf: {
    height: 1,
    backgroundColor: "#CCCCCC"
  },
  imagef: {
    width: 45,
    height: 45,
    borderRadius: 20,
    marginLeft: 20
  },
  timef: {
    fontSize: 11,
    color: "#808080",
  },
  namef: {
    fontSize: 16,
    fontWeight: "bold",
  },

  //Juegos
  imagenCardview: {
    height: hp('50%'),
    width: hp('50%'),
  },

  centerImage: {
    justifyContent: 'center',
    alignItems: 'center',
    width: wp('100%'),

  },

  profilePhoto: {
    height: hp('8%'),
    width: hp('8%'),
    // marginTop: hp('6%'),
    // marginBottom: hp('6%'),
    borderRadius: 30,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "orange"
  },


  imagenJuego: {
    height: hp('40%'),
    width: hp('40%'),
    marginTop: hp('6%'),
    marginBottom: hp('6%'),
  },

  buttonjuego: {
    marginBottom: hp('3%'),
    width: wp('92%'),
    marginLeft: wp('4%'),
    marginRight: wp('4%'),
    backgroundColor: '#909497',
  },

  buttonjuegowin: {
    marginBottom: hp('3%'),
    width: wp('92%'),
    marginLeft: wp('4%'),
    marginRight: wp('4%'),
    backgroundColor: '#58D68D',
  },

  buttonjuegofail: {
    marginBottom: hp('3%'),
    width: wp('92%'),
    marginLeft: wp('4%'),
    marginRight: wp('4%'),
    backgroundColor: '#EC7063',
  },

  textoOpcion: {
    fontSize: 30,
    fontWeight: 'bold',
  },

  textoNiveles: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: hp('3%'),
  },

  //frasePNL
  frasePNL: {
    fontWeight: '100',
    color: '#ABB2B9',
    fontStyle: 'italic',
    fontSize: hp('5%'),
    textAlign: 'center',
    marginLeft: wp('2%'),
    marginRight: wp('2%'),
  },

  frasePNLEstudiante: {
    width: wp('100%'),
    fontWeight: '100',
    color: '#ABB2B9',
    fontStyle: 'italic',
    fontSize: hp('4%'),
    textAlign: 'center',
    marginLeft: wp('2%'),
    marginRight: wp('2%'),
    marginTop: hp('1%'),
    marginBottom: hp('3%'),
  },


  imagenBienvenidaEstudiante: {
    height: hp('40%'),
    width: hp('40%'),
    marginTop: hp('6%'),
  },

  crearEntrada: {
    marginTop: hp('5%'),
    marginLeft: wp('5%'),
    marginRight: wp('5%'),
    width: wp('90%'),
    height: hp('30%'),
  },

});

export { styles as default };
