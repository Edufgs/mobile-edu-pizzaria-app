import React from "react";
import { 
  View, 
  Text, 
  StyleSheet, //é para estilizar as paginas.
  Image, //é para adicionar imagens
  TextInput, //entrada de texto
  TouchableOpacity //Botao de toque
} from "react-native";

export default function SignIn(){
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
        />
        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          placeholderTextColor="#F0F0F0"
          secureTextEntry={true} //Deixa mascarado a senha 
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Acessar</Text>
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