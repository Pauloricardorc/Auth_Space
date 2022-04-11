import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type IUser = {
  email: String;
  password: String;
}

interface IUserData {
  user?: IUser;
  signIn(user: IUser): void;
  logout(): void
}

const AuthContext = createContext<IUserData>({} as IUserData)

export const AuthProvider = ({children}: {children: JSX.Element}) => {
  const navigate = useNavigate()
  const [profile, setProfile] = useState<IUser>()
  const SessionOn = localStorage.getItem('Session')
  
  useEffect(() => {
    SessionOn ? navigate('/') : navigate('/login')
  }, [profile])

  async function signIn(user: IUser) {
    const dataAuth = await axios({
      method: 'POST',
      baseURL: 'http://localhost:3333/login',
      data: user
    }).then(res => res.data).catch(() => {
      navigate('/login')
    })
    
    const data = {
      id: dataAuth.id,
      name: dataAuth.name,
      email: dataAuth.email,
      status: dataAuth.status,
      token: dataAuth.token
    }

    localStorage.setItem('Session', JSON.stringify(data))

    navigate('/')
    
    return dataAuth
  }

  async function logout () {
    await axios({
      method: 'GET',
      baseURL: 'http://localhost:3333/logout'
    })

    navigate('/login')
  }
  return (
    <AuthContext.Provider value={{user: profile, signIn, logout}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext