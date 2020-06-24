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
        width: 200,
        top: 0,
        right: 0,
        position: "absolute"
    },
    hello: {
        fontSize: 80,
        fontWeight: "bold",
        top: 135,
        left: 70,
        position: "absolute"
    },
    singin: {
        position: "absolute",
        top: 130,
        fontSize: 50,
        left: 75,
        fontWeight: "bold"
    },
    item: {
        position: "absolute",
        top: 280,
        height: 50,
        width: 300,
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
    item1: {
        position: "absolute",
        top: 345,
        height: 50,
        width: 300,
        backgroundColor: '#EAEDF1',
        borderRadius: 50,
        paddingLeft: 50,
        shadowColor: "#000"
    },
    passwordField: {
        position: "absolute",
        height: 50,
        width: 300,
        backgroundColor: '#EAEDF1',
        borderRadius: 50,
        top: 70,
        paddingLeft: 50
    },
    a2img: {
        position: "absolute",
        left: 20,
        top: 15,
        width: 20,
        height: 20
    },
   
    item2:{
        position: "absolute",
        top: 410,
        height: 50,
        width: 300,
        backgroundColor: '#EAEDF1',
        borderRadius: 50,
        paddingLeft: 50,
        shadowColor: "#000"
    },

    Button: {
        position: "absolute",
        width: 100,
        height: 50,
        backgroundColor: "#F9AB4B",
        borderRadius: 20,
        bottom: 90,
        left: 220
    },
    Text: {
        color: "white",
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        top: 10
    },

    dont: {
        bottom:0,
        position:'absolute',
        width:wp("100%"),
        backgroundColor:'#EEEEEE',
        height:30,
        alignItems:'center',
        justifyContent:'center'
    },

    last:{
        color:'#737273'
    },

    backArrow:{
        position:"absolute",
        top:10,
        left:20
    },

    touachableButton: {
        position: 'absolute',
        right: 18,
        height: 30,
        width: 30,
        padding: 2
      },

    buttonImage: {
        resizeMode: 'contain',
        height: '100%',
        width: '100%',
    }
  

}); 