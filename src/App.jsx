import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter'
import Login from './components/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
  <div>
    <h1>Login <form action=""></form></h1>
    <Login />
  </div>
  )
}

export default App
