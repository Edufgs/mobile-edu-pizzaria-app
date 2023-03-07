 import React from "react";
 //Importação da navegação do react native
 import { createNativeStackNavigator } from '@react-navigation/native-stack'
 
 import DashBoard from "../pages/Dashboard";
 
/**
 * Só usuarios logados podem acessar.
 */
 
 //Para criar navegação então precisa criar essa Stack (Lembrando que a primeira letra tem que ser maiuscula)
 const Stack = createNativeStackNavigator();
 
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
          options={{ headerShown: false }}
        />
     </Stack.Navigator>
   )
 }
 
 //Precisa exporta para os outros acessar
 export default AppRoutes;