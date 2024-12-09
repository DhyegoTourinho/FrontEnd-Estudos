import { Fragment } from 'react';
import './App.css'
import red from "./assets/Fundo-vermelho.jpg"
import CarDetails from './components/CarDetails';
import Data from './components/data';
import ListRender from './components/ListRender';
import ShowUserName from './components/ShowUserName';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import { useState } from 'react';
import ChangeMessage from './components/ChangeMessage';


const cars = [
  {id:1, brand:"Chevrolet", km:20, color:"Azul"},
  {id:2, brand:"BYD", km:1200, color:"Roxo"},
  {id:3, brand:"Fiat", km:0, color:"Laranja"},
]

function App() {
  const user = {
    id:2, name:"Dhyego", age:20,
  }
  function ShowMessage(){
    console.log("Socorro");
  }
  const [message, setMessage] = useState("");
  const handleMessage = (msg) => {
    setMessage(msg);
  };
  return (
    
    <div className='App' style={{paddingBottom:"500px"}}>
      <h1>Avancando em React</h1>
      <div class="img-container">
      <img src="/Fundo-verde.jpg" alt="Fundo vermelho" class="img" />
      <img src={red} alt="red walpaper" class="img"/>
      <Data/>
      <div>
      <ListRender/>
      <ShowUserName user={user}/>
      <CarDetails cars={cars}/>
      <Fragment/>
      <Container>
        <p>Teste</p>
      </Container>
      <ExecuteFunction myFunction={ShowMessage}/>
      <Message msg={message}/>
      <ChangeMessage handleMessage={handleMessage}/>
      </div>
      </div>
    </div>
  );
}

export default App
