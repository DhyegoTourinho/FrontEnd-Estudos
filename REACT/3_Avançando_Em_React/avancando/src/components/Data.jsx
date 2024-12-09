import {useState} from "react";

const Data = () => {
    let someData = 10;
    const [anotherNumber, setAnotherNumber] = useState(15)
    return <div>
            <div>
                <p>1º Valor: {someData}</p>
                <button onClick={() => (someData = 15)}> Aumenta valor</button>
            </div>
            <div>
                <p>2º Valor: {anotherNumber}</p>
                <button onPointerDown={() => (setAnotherNumber(20))}> Aumenta valor 2</button>
            </div>
         </div>
}

export default Data;