import { View, Text, StyleSheet, FlatList } from 'react-native';

import Header from '../../components/Header';
import Balance from '../../components/Balance';
import Transacoes from '../../components/transacoes';
import Actions from '../../components/Actions'


const list = [
  {
    id: 1,
    label: 'Conta de Luz',
    value: '300,87',
    date: '17/09/2023',
    type:0,
  },
  {
    id: 2,
    label: 'Pix',
    value: '75,00',
    date: '17/09/2023',
    type:1,
  },
  {
    id: 3,
    label: 'Financiamento',
    value: '750,00',
    date: '17/09/2023',
    type:0,
  },
  {
    id: 4,
    label: 'PIX',
    value: '150,00',
    date: '17/09/2023',
    type:0,
  },
]

export default function Home() {
  return (
    <View style={s.container}>
      <Header name="Gabriel F. Goulart" />
      <Balance saldo="9.520,00" gastos="-2.000,00"/>
      <Actions/>

      <Text style={s.title}>Últimas Transações:</Text>
      <FlatList 
        style={{marginStart:14, marginEnd:14,}}
        data={list}
        keyExtractor={ (item) => String(item.id) }
        showsVerticalScrollIndicator= {false}
        renderItem={ ({ item }) => <Transacoes data={item} /> }
      />
    </View>
  );
}

const s = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#0e002f',
  },
  title:{
    color:"#FFF",
    fontSize: 18,
    fontWeight:'bold',
    marginTop:10,
    marginBottom:20,
    padding:14,
  },
})