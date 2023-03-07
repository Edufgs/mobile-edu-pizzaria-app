import React from "react";
//Importação da navegação do react native
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import DashBoard from "../pages/Dashboard";
import Order from "../pages/Order";
 
/**
 * Só usuarios logados podem acessar.
 */

//Tipagem dos Stack das rotas
export type StackParamsList = {
  //Como não vai pasar nada para essa pagina então é undefined
  DashBoard: undefined;
  //Esse precisa desse dois parametros
  Order: {
    number: number | string;
    order_id: string;
  };
}
 
//Para criar navegação então precisa criar essa Stack (Lembrando que a primeira letra tem que ser maiuscula)
const Stack = createNativeStackNavigator<StackParamsList>();
 
function AppRoutes(){
  return(
    //Primeiro vem o stack navigator
    <Stack.Navigator>
      {/**
        * Esse Stack.Screen é cada tela.
        * Precisa do "name" (Nome da tela).
        * Precisa dizer qual "component" que vai ser renderizado.
      */}
      <Stack.Screen 
        name="DashBoard" 
        component={DashBoard}
        options={{ headerShown: false }} //Tira o cabeçalho
      />
      <Stack.Screen
        name="Order"
        component={Order}
        options={{ headerShown: false }} //Tira o cabeçalho
      />
    </Stack.Navigator>
  )
}
 
//Precisa exporta para os outros acessar
export default AppRoutes;