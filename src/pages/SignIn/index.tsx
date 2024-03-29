import React, { useState, useContext } from "react";
import { 
  View, 
  Text, 
  StyleSheet, //é para estilizar as paginas.
  Image, //é para adicionar imagens
  TextInput, //entrada de texto
  TouchableOpacity, //Botao de toque
  ActivityIndicator
} from "react-native";
import { AuthContext } from '../../contexts/AuthContext'

export default function SignIn(){
  const { signIn, loadingAuth } = useContext(AuthContext)
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleLogin(){
    //Verifica se está vazio
    if(email === '' || password === ''){
      return
    }

    await signIn({ email, password })
  }

  return(
    //Adiciona um grupo de estilo no componente
    <View style={styles.container}>
      <Image
        style={styles.logo}
        /**
         * Diz onde está a imagem
         * require = o o caminho ate a imagem
         */
        source={require('../../assets/logo.png')}
        
      />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Digite seu email"
          placeholderTextColor="#F0F0F0" //Cor do placeholder
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          placeholderTextColor="#F0F0F0"
          secureTextEntry={true} //Deixa mascarado a senha 
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          {/* Se tiver carregando então mostra o indicador de carregamento */}
          { loadingAuth ? (
            <ActivityIndicator size={25} color="#FFF"/>
          ) : (
            <Text style={styles.buttonText}>Acessar</Text>
          ) }
        </TouchableOpacity>
      </View>

    </View>
  )
}

//Configuração de estilos
const styles = StyleSheet.create({
  //Grupo de estilos
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: '#1d1d2e'
  },
  logo:{
    width: 400,
    height: 100,
  },
  inputContainer:{
    width: '95%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 32,
    paddingHorizontal: 14
  },
  input:{
    width: '95%',
    height: 40,
    backgroundColor: '#101026',
    marginBottom: 12,
    borderRadius: 4,
    paddingHorizontal: 8,
    color: '#FFF'
  },
  button:{
    width: '95%',
    height: 40,
    backgroundColor:'#3fffa3',
    borderRadius: 4,
    justifyContent:'center',
    alignItems: 'center',
  },
  buttonText:{
    fontSize: 18,
    fontWeight: 'bold',
    color: '#101026'
  }
})