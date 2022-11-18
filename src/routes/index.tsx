import React from "react";

import { View } from 'react-native'

import AppRoutes from "./app.routes";
import AuthRoutes from "./auth.routes";

/**
 * Pagina de rotas.
 * Ele que controla qual exibir (app.routes ou auth.routes)
 */

function Routes(){
  const IsAuthenticated = false; //Verifica se está autenticado
  const loading = false; //Verifica se está carregando (controle de load)
  
  return(
    //Se ele estiver true então rederiza o componente "AppRoutes" se não rederiza o "AuthRoutes"
    IsAuthenticated ? <AppRoutes/> : <AuthRoutes/>
  )
}

export default Routes