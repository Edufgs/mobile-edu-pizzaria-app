import React, { useContext } from "react";
import { View, Text, Button } from 'react-native'
//importando o contexto
import { AuthContext } from '../../contexts/AuthContext'

export default function DashBoard(){
  const { signOut } = useContext(AuthContext)

  return(
    <View>
      <Text>Tela Dashboard</Text>
      <Button
        title='Sair do app'
        onPress={signOut}  
      />
    </View>
  )
}