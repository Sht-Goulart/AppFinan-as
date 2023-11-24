import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

import { FontAwesome, Feather, MaterialCommunityIcons, MaterialIcons, Octicons  } from '@expo/vector-icons';

export default function Balance({ saldo, gastos }){
  return(
    <ScrollView style={s.container} horizontal={true} showsHorizontalScrollIndicator={false}>
      
      <TouchableOpacity style={s.actionButton}>
        <View style={s.areaButton}>
          <MaterialCommunityIcons name="bank-transfer" size={35} color="#fff" />
          <Text style={{color:"#fff"}}>transferencia</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={s.actionButton}>
        <View style={s.areaButton}>
          <FontAwesome name="credit-card" size={35} color="#fff" />
          <Text style={{color:"#fff"}}>Cartões</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={s.actionButton}>
        <View style={s.areaButton}>
          <Feather name="shopping-bag" size={35} color="#fff" />
          <Text style={{color:"#fff"}}>Compras</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={s.actionButton}>
        <View style={s.areaButton}>
          <MaterialIcons name="attach-money" size={35} color="#fff" />
          <Text style={{color:"#fff"}}>Emprestimo</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={s.actionButton}>
        <View style={s.areaButton}>
          <Feather name="globe" size={35} color="#fff" />
          <Text style={{color:"#fff"}}>Tranfer. Int</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={s.actionButton}>
        <View style={s.areaButton}>
          <Octicons name="graph" size={35} color="#fff" />
          <Text style={{color:"#fff"}}>Investimento</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={s.actionButton}>
        <View style={s.areaButton}>
          <MaterialCommunityIcons name="piggy-bank-outline" size={35} color="#fff" />
          <Text style={{color:"#fff"}}>Economia</Text>
        </View>
      </TouchableOpacity>

    </ScrollView>
  );
}

const s = StyleSheet.create({
  container:{
    maxHeight:100,
    marginBottom:10,
    marginTop:18,
    paddingStart:14,
    paddingEnd:14,
  },
  actionButton:{
    alignItems:'center',
    marginBottom:10,
    marginRight:20,
  },
  areaButton:{
    height:90,
    width:90,
    borderRadius:50,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor: "#a6a6a6",
  }
})