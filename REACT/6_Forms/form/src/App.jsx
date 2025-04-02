import { useState } from 'react'
import './App.css'
import MyForm from './components/MyForm'

function App() {

  return (
    <div className='App'>
      <h1>Formulário</h1>
      <MyForm userName="Dhyego" userEmail="Dhyego@gmail.com"/>
    </div>
  )
}

export default App
