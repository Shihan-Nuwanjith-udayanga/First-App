import React, { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


export default StyleSheet.create({
    View: {
        backgroundColor: 'white',
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
        height: hp('96%'),
        width: wp('100%')
      },
      img: {
        width: 260,
        top: 0,
        right: 0,
        position: "absolute",
      },
      backArrow:{
        position:"absolute",
        top:10,
        left:20
      },
      text: {
        position: "absolute",
        right: 30,
        top: 1e0,
        fontSize: 50,
        fontWeight: "bold",
        color: "white"
      },
      form: {
        position: "absolute",
        top: 280,
      },
      button: {
        position: "absolute",
        width: 220,
        height: 50,
        backgroundColor: "#F9AB4B",
        borderRadius: 20,
        bottom: 10,
        left:72
      },
      Image: {
        position: "absolute",
        borderRadius: 100,
        borderWidth: 0.5,
        width: 150,
        height: 150,
        left: 105,
        top: 110,
        backgroundColor: "#EBEDED"
      },
      camera: {
        position: "absolute",
        left: 150,
        top: 150,
        width: 8000,
        height: 8000
      },
      cameraView: {
        position: "absolute",
        backgroundColor: "#F8772A",
        top: 60,
        width: 50,
        height: 50,
        left: 60,
        borderRadius: 50
      },
      item: {
        position: "absolute",
        top: 330,
        left: 25,
        height: 50,
        width: 310,
        backgroundColor: '#EAEDF1',
        borderRadius: 50,
        paddingLeft: 50,
        shadowColor: "#000"
      },
      a1img: {
        position: "absolute",
        left: 20,
        top: 15,
        width: 20,
        height: 20
      },
      item1:{
        position: "absolute",
        top: 390,
        left: 25,
        height: 50,
        width: 310,
        backgroundColor: '#EAEDF1',
        borderRadius: 50,
        paddingLeft: 50,
        shadowColor: "#000"
      },
      item2:{
        position: "absolute",
        top: 450,
        left: 25,
        height: 50,
        width: 310,
        backgroundColor: '#EAEDF1',
        borderRadius: 50,
        paddingLeft: 50,
        shadowColor: "#000"
      },
      item3:{
        position: "absolute",
        top: 510,
        left: 25,
        height: 50,
        width: 310,
        backgroundColor: '#EAEDF1',
        borderRadius: 50,
        paddingLeft: 50,
        shadowColor: "#000"
      },
    });
    