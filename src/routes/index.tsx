import React, { useContext } from "react";
//ActivityIndicator é o spinner que fica rodando
import { View, ActivityIndicator } from 'react-native'
import AppRoutes from "./app.routes";
import AuthRoutes from "./auth.routes";
import { AuthContext } from '../contexts/AuthContext'

/**
 * Pagina de rotas.
 * Ele que controla qual exibir (app.routes ou auth.routes)
 */

function Routes(){
  const { isAuthenticated, loading } = useContext(AuthContext); //Verifica se está autenticado

  //Verifica se está carregando e se tiver coloca um spinner rodando
  if(loading){
    /**
     * É adicionado os estilos diretamente.
     * flex:1 (Pega a tela toda)
     */
    return(
      <View 
        style={{
          flex:1, 
          backgroundColor: '#1D1D2E', 
          justifyContent: 'center', 
          alignItems: 'center'
        }}>
          {/**
           * ActivityIndicator é um spinner que fica rodando.
           * size é o tamanho desse componete
           */}
          <ActivityIndicator size={60} color="#f5f7fb"/>
      </View>
    )
  }

  return(
    //Se ele estiver true então rederiza o componente "AppRoutes" se não rederiza o "AuthRoutes"
    isAuthenticated ? <AppRoutes/> : <AuthRoutes/>
  )
}

export default Routes