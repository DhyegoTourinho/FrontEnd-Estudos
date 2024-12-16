import { useState } from "react";
import "./MyForm.css";

const MyForm = () => {

    const [name, setName] = useState();
    const [email, setEmail] = useState();

    const handleName = (e) => {
        setName(e.target.value)
    };
    
    const handlePositionTop = (e) => {
        return Math.random() * (500); 
    };
  return (
    
    <div>
    {/*1 - Criação de formulário */}
     <div class="teste"  style={{top:handlePositionTop}}>oi</div>
     <form>
        <div>
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" placeholder="Digite seu nome" onChange={handleName} />
        </div>
        <input type="submit" value="Enviar"/>
        {/*Label do jeito correto*/}
        <label>
            <span>E-mail:</span>
            <input type="text" name="email" placeholder="Digite seu email" onChange={(e) => {SetEmail(e.target.value)}}/>
        </label>
        <input type="submit" name="email" value="Enviar"/>
     </form>
    </div>
  )
}

export default MyForm;