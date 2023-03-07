import React, { useState, createContext, ReactNode } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { api } from '../services/api'

/**
 * A Aplicação consome tudo que está no contexto.
 */

type AuthContextData = {
  user: UserProps;
  isAuthenticated: boolean;
  signIn:(credencials: SignInProps) => Promise<void>;
}

type SignInProps = {
  email: string;
  password: string;
}

type UserProps = {
  id: string;
  name: string;
  email: string;
  token: string;
}

type AuthProviderProps = {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({children}: AuthProviderProps){
  const [user, setUser] = useState<UserProps>({
    id: '',
    name: '',
    email: '',
    token: ''
  })

  //Controle para ver se está carregando.
  const [loadingAuth, setLoadingAuth] = useState(false)

  //!! = Converte para boolean. Se tiver algo então é true.
  const isAuthenticated = !!user.name;

  async function signIn({email, password}: SignInProps) {
    setLoadingAuth(true); //inicia o loading

    try{
      const response = await api.post('/sessions',{
        email,
        password
      })
      //console.log(response.data);

      const { id, name, token } = response.data;

      const data ={
        ...response.data
      }

      await AsyncStorage.setItem('@edupizaaria', JSON.stringify(data));

      //Set o token nas resquisições da api
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`

      setUser({
        id, 
        name, 
        email,
        token
      });

      setLoadingAuth(false);

    }catch(err){
      console.log('Erro ao acessar', err);
      setLoadingAuth(false); //para o loading
    }
  }

  return(
    //Cria o contexto
    <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
      {/* Fica todas as paginas pois o contexto fica em volta a aplicação */}
      {children}
    </AuthContext.Provider>
  )
}