import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Transacoes({ data }){
  const [showValue, setShowValue] = useState(false);

  return(
    <TouchableOpacity style={s.container} onPress={ () => setShowValue(!showValue) }>
        <Text style={s.date}>{data.date}</Text>

        <View style={s.content}>
          <Text style={s.label}>{data.label}</Text>

          {
            showValue ? (
              <Text style={data.type ==1 ? s.value : s.valueR}>R$ {data.type == 1 ? `R$ ${data.value}`  : `R$ -${data.value}` }</Text>
            ) : (
              <View style={s.valueOcult}></View>
            )}

        
        </View>
    </TouchableOpacity>
  );
}

const s = StyleSheet.create({
  container:{
    flex:1,
    marginBottom:24,
    borderBottomWidth: 0.5,
    borderBottomColor:'#404040',
  },
  date:{
    fontWeight:'bold',
    color:'#c0c0c0',
  },
  content:{
    flexDirection:'row',
    justifyContent: 'space-between',
    marginTop:2,
    marginBottom:15,
  },
  label:{
    color:'#FFF',
    fontWeight:'bold',
    fontSize:17,
  },
  value:{
    color:'#2ecc71',
    fontSize:16,
    fontWeight:'bold',
  },
  valueR:{
    color:'#e51407',
    fontSize:16,
    fontWeight:'bold',
  },
  valueOcult:{
    marginTop:6,
    width:80,
    height:16,
    backgroundColor: '#4b4b4b',
    borderRadius:6,
  },
})