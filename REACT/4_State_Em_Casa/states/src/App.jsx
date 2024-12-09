import { useState } from 'react'
import './App.css'
import Data from './components/Data'
import ConditionalRender from './components/ConditionalRender'

function App() {

  return (
    <div>
      <h1>Titulo</h1>
      <Data/>
      <ConditionalRender/>
    </div>
  )
}

export default App
