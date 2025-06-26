
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import { Login } from './components/login'
import { Profile } from './components/profile'

function App() {
  
  return (
    <UserContextProvider>
      <h1>React with Chai aur Miana k sth</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
