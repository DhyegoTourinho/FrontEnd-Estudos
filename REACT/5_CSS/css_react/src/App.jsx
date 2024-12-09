import './App.css'
import MyComponent from './component/MyComponent.jsx'
import Title from './component/Title.jsx';

function App() {
  const n = 15;
  const redTitle = 1;
  return (
   <div>
    <h1>Aprendendo CSS no React</h1>
    <MyComponent/>
    <p>Pegou o CSS do componente</p>
    <p style={{color:"blue", padding:10}}>Estes Elementos estão inline</p>

    <h2 style={n > 17 ? {color:"blue"} : {color:"red"}}> Teste de ternario </h2>

    {/* Classes dinamicas */}
    <p></p>
    <h2 className={redTitle ? "red-title" : "title"}> Class ternario </h2>
    <Title />
   </div>
  )
}

export default App
