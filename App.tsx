/**
 * View = Uma caixa para colocar coisas, igual 'span'
 * StatusBar = é o componente da barra de status que fica na parte de cima do celular
 */
import { View, StatusBar } from 'react-native';
//Sempre que for usar as rotas então o "NavigationContainer" precisa estar em volta dela
import { NavigationContainer } from '@react-navigation/native'
//Importa as rotas
import Routes from './src/routes';
import { AuthProvider } from './src/contexts/AuthContext'

export default function App() {
  return (
    <NavigationContainer>
      {/* Contexto para verificar a autenticação */}
      <AuthProvider>
        {/* Configura a barra superior do celular, barra de status */}
        <StatusBar 
          backgroundColor="#1d1d2e" //Fundo escuro
          barStyle="light-content" //Cor dos itens da barra de status
          translucent={false} //Opção dos itens passar por baixo do status bar
        />
        <Routes/>
      </AuthProvider>
    </NavigationContainer>
  );
}