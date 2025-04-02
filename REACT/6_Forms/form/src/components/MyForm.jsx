import { useState } from "react";
import "./MyForm.css";
import { use } from "react";

const MyForm = ({userName, userEmail}) => {

    const [name, setName] = useState(userName);
    const [email, setEmail] = useState(userEmail);
    const [bio, setBio] = useState("");
    const [role, setRole] = useState("");

<<<<<<< Updated upstream
    const handleName = (e) => {
        setName(e.target.value)
    };
    
    const handlePositionTop = (e) => {
        return Math.random() * (500); 
    };
=======
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(name, email);
        setName("");
        setEmail("");
        setBio("");
        setRole("");
    }
>>>>>>> Stashed changes
  return (
    
    <div>
        
    {/*1 - Criação de formulário */}
     <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="name">Name:</label>
            <input type="text"
             name="name" 
             placeholder="Digite seu nome" 
             onChange={(e) => {setName(e.target.value)}} 
             value={name}/>
        </div>
        {/*Label do jeito correto*/}
        <label>
            <span>E-mail:</span>
            <input type="text"
             name="email" 
             placeholder="Digite seu email" 
             onChange={(e) => {setEmail(e.target.value)}}
             value={email}/>
        </label>
        {/* textearea */}
        <label>
            <span>Bio:</span>
            <textarea name="bio" 
            placeholder="Fale sobre você"
            onChange={(e) => {setBio(e.target.value)}}
            value={bio}></textarea>
        </label>
        <label>
            <span>Função no sistema</span>
            <select name="role"
             onChange={(e) => {setRole(e.target.value)}} 
             value={role}>
            <option value="user">Usuário</option>
            <option value="editor">Editor</option>
            <option value="admin">Adminstrador</option>
            </select>
        </label>
        <input type="submit"
         name="email"
         value="Enviar"/>
     </form>
    </div>
  )
}

export default MyForm;