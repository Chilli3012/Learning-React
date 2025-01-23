import { useState } from 'react'

import './App.css'
import Login from './Components/Login'
import Profile from './Components/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Welcome to our page</h1>
      <Login/>
      <Profile/>
    </>
  )
}

export default App
