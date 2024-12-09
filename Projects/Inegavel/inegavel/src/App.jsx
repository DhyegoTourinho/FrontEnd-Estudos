import './App.css'
import ConfirmButton from './components/ConfirmButton'
import DeclineButton from './components/DeclineButton'
import Title from './components/Title'

function App() {
  return (
    <div className='App'>
      <Title/>
      <div class="buttons-container">
        <ConfirmButton/>
        <DeclineButton/>
      </div>
    </div>
  )
}

export default App
