import React, { useState, createContext, ReactNode, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { api } from '../services/api'

/**
 * A Aplicação consome tudo que está no contexto.
 */

type AuthContextData = {
  user: UserProps;
  isAuthenticated: boolean;
  signIn:(credencials: SignInProps) => Promise<void>; //Está mandando uma função em vez de uma variavel
  loadingAuth: boolean;
  loading: boolean;
  signOut: () => Promise<void>; //Está mandando uma função em vez de uma variavel
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
  const [loading, setLoading] = useState(true)

  //!! = Converte para boolean. Se tiver algo então é true.
  const isAuthenticated = !!user.name;

  //Quando o componente dor montado, é executado esse useEffect
  useEffect(() =>{
    //Pegar os dados salvos do user
    async function getUser() {
      const userInfo = await AsyncStorage.getItem('@edupizzaria');
      //Transforma em objeto novamente se tiver algo
      let hasUser: UserProps = JSON.parse(userInfo || '{}');

      //Verificar se recebeu as informações dele.
      if(Object.keys(hasUser).length > 0){
        api.defaults.headers.common['Authorization'] = `Bearer ${hasUser.token}`

        setUser({
          id: hasUser.id,
          name: hasUser.name,
          email: hasUser.email,
          token: hasUser.token
        })
      }

      setLoading(false);

    }

    getUser();
  }, [])

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

      await AsyncStorage.setItem('@edupizzaria', JSON.stringify(data));

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

  async function signOut() {
    await AsyncStorage.clear()
    .then(() => {
      setUser({
        id: '',
        name:'',
        email: '',
        token: ''
      })
    })    
  }

  return(
    //Cria o contexto
    <AuthContext.Provider 
      value={{ 
        user, 
        isAuthenticated, 
        signIn, 
        loadingAuth, 
        loading,
        signOut
      }}>
      {/* Fica todas as paginas pois o contexto fica em volta a aplicação */}
      {children}
    </AuthContext.Provider>
  )
}