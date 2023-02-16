import React, { useState, createContext, ReactNode } from 'react'

/**
 * A Aplicação consome tudo que está no contexto.
 */

type AuthContextData = {
  user: UserProps;
  isAuthenticated: boolean;
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

  //!! = Converte para boolean. Se tiver algo então é true.
  const isAuthenticated = !!user.name;

  return(
    //Cria o contexto
    <AuthContext.Provider value={{ user, isAuthenticated }}>
      {/* Fica todas as paginas pois o contexto fica em volta a aplicação */}
      {children}
    </AuthContext.Provider>
  )
}