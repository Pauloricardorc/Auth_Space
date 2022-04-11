import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AuthProvider } from './context/LogInContext'
import Home from './pages/Home'
import Login from './pages/Login'
import { globalStyles } from './styles'
globalStyles()

export function AppRouter() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default { AppRouter }