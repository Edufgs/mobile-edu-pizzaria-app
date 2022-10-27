/**
 * View = Uma caixa para colocar coisas, igual 'span'
 * StatusBar = é o componente da barra de status que fica na parte de cima do celular
 */
import { View, StatusBar } from 'react-native';
import SignIn from './src/pages/SignIn';


export default function App() {
  return (
    <View>      
      {/* Configura a barra superior do celular, barra de status */}
      <StatusBar 
        backgroundColor="#1d1d2e" //Fundo escuro
        barStyle="light-content" //Cor dos itens da barra de status
        translucent={false} //Opção dos itens passar por baixo do status bar
      />
      <SignIn />
    </View>
  );
}