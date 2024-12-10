import { useState } from 'react'
import './App.css'
import MyForm from './components/MyForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <h1>Formulário</h1>
      <MyForm/>
    </div>
  )
}

export default App
