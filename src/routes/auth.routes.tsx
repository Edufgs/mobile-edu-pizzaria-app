import React from "react";
//Importação da navegação do react native
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import SignIn from "../pages/SignIn";

/**
 * Só usuarios não logados podem acessar.
 */

//Para criar navegação então precisa criar essa Stack (Lembrando que a primeira letra tem que ser maiuscula)
const Stack = createNativeStackNavigator();

function AuthRoutes(){
  return(
    //Primeiro vem o stack navigator
    <Stack.Navigator>
      {/**
       * Esse Stack.Screen é cada tela.
       * Precisa do "name" (Nome da tela).
       * Precisa dizer qual "component" que vai ser renderizado.
       * Opcionalmente é possivel passar o "options" configurando algumas coisas
       * 
       * Options:
       * headerShown: false (Tira o header que fiz dizendo em qual pagina está)
       */}
      <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }}/>
    </Stack.Navigator>
  )
}

//Precisa exporta para os outros acessar
export default AuthRoutes;