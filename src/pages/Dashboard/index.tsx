import React, { useState } from "react";
import { Text, SafeAreaView, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
//Usado para navegar
import { useNavigation } from '@react-navigation/native'
//Pegando a tipagem no Stack Navigation
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { StackParamsList } from '../../routes/app.routes'

export default function DashBoard(){
  /**
   * Esse useNavigation é do tipo NativeStackNavigationProp que 
   * recebe o StackParamsList criado
   */
  const navigation = useNavigation<NativeStackNavigationProp<StackParamsList>>(); //Usado para navegar
  const [number, setNumber] = useState('');

  async function openOrder() {
    if(number === ''){
      return;
    }

    //Fazer a requiição e abir a mesa e navegar para proxima tela
    navigation.navigate('Order', { number: number, order_id: 'bf5c1841-9956-45d1-bdd3-b3f00f4f7f7d' })

  }

  return(
    //Garante uma area segura para não ficar na parte do entalho no iphone
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Novo Pedido</Text>

      <TextInput 
        style={styles.input}
        placeholder="Número da mesa"
        placeholderTextColor="#F0F0F0"
        keyboardType="numeric" //Tipo do teclado
        value={number} //Onde fica o valor
        onChangeText={setNumber} //Onde set a cada digitação
      />
      <TouchableOpacity style={styles.button} onPress={openOrder}>
        <Text style={styles.buttonText}>Abrir mesa</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
    backgroundColor: '#1d1d2e'
  },
  title:{
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 24
  },
  input: {
    width: '90%',
    height: 60,
    backgroundColor: '#101026',
    borderRadius: 4,
    paddingHorizontal: 8,
    textAlign: 'center',
    fontSize: 22,
    color: '#FFF'
  },
  button:{
    width: '90%',
    height: 40,
    backgroundColor: '#3fffa3',
    borderRadius: 4,
    marginVertical: 12,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 18,
    color: '#101026',
    fontWeight: 'bold'
  }
})