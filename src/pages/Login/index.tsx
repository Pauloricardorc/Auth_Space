import { useContext, useState } from 'react'
import AuthContext from '../../context/LogInContext'
import { Container, ContainerLogin, Image, ContainerInput, ContainerButton } from './styles'

export default function Login () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const context = useContext(AuthContext)

  async function LogIn() {
    context.signIn({email, password})
  }

  return(
    <Container>
      <ContainerLogin>
        <Image src="/assets/images/astronaut.jpg" />
        <ContainerInput>
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder='email'/>
          <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="password"/>
          <div>
            <p>Não tem uma conta? <span>Registre-se</span></p>
          </div>
        </ContainerInput>
        <hr />
        <ContainerButton>
          <button onClick={LogIn}>Entrar</button>
        </ContainerButton>
      </ContainerLogin>
    </Container>
  )
}