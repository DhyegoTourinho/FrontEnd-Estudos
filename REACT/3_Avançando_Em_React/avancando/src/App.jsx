import './App.css'

import red from "./assets/Fundo-vermelho.jpg"

import Data from './components/data';

import ListRender from './components/ListRender';
function App() {
  return (
    <div className='App' style={{paddingBottom:"500px"}}>
      <h1>Avancando em React</h1>
      <div class="img-container">
      <img src="/Fundo-verde.jpg" alt="Fundo vermelho" class="img" />
      <img src={red} alt="red walpaper" class="img"/>
      <Data/>
      <div>
      <ListRender/>
      </div>
      </div>
    </div>
  );
}

export default App
