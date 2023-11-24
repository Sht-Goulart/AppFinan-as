import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Balance({ saldo, gastos }){
  return(
    <View style={s.container}>

      <View style={s.item}>
        <Text style={s.itemTitle}>Saldo</Text>
        <View style={s.content}>
          <Text style={s.currencySymbol}>R$</Text>
          <Text style={s.balanceS}>{saldo}</Text>
        </View>
      </View>

      <View style={s.item}>
        <Text style={s.itemTitle}>Gastos</Text>
        <View style={s.content}>
          <Text style={s.currencySymbol}>R$</Text>
          <Text style={s.balanceG}>{gastos}</Text>
        </View>
      </View>

    </View>
  );
}


const s = StyleSheet.create({
  container:{
    backgroundColor:'#FFF',
    flexDirection:'row',
    justifyContent:'space-between',
    paddingStart:18,
    paddingEnd:18,
    marginStart:14,
    marginEnd:14,
    marginTop:-18,
    borderRadius:7,
    paddingTop:22,
    paddingBottom:22,
    zIndex:99,
  },
  itemTitle:{
    fontSize:20,
    color:'#c0c0c0'
  },
  content:{
    flexDirection: 'row',
    alignItems:'center',
  },
  currencySymbol:{
    color: '#c0c0c0',
    marginRight:5,
  },
  balanceS:{
    fontSize:22,
    color:'#3c9c2f',
  },
  balanceG:{
    fontSize:22,
    color: '#e51407',
  }
})







