import React from "react";
import { View, Text, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons'


const sBH = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

export default function Header({ name }){
  return(
    <View style={s.container}>
      <View style={s.contant}>
        <TouchableOpacity activeOpacity={0.9} style={s.buttonUser}>
          <Feather name="user" size={27} color="#FFF" />
        </TouchableOpacity>

        <Text style={s.userName}>{name}</Text>
      </View>
    </View>
  )
}



const s = StyleSheet.create({
  container:{
    backgroundColor: "#8000ff",
    paddingTop: sBH,
    flexDirection:"row",
    paddingStart:16,
    paddingEnd:16,
    paddingBottom:30,
  },
  contant:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",
  },
  userName:{
    font:18,
    fontWeight: "bold",
    color:"#FFF",
    paddingTop: 10,
  },
  buttonUser:{
    width:44,
    height:44,
    backgroundColor:'rgba(255,255,255, 0.5)',
    justifyContent:'center',
    alignItems:'center',
    borderRadius: 44/2,
  }
})