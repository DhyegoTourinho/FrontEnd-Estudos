import { useState } from "react";

const Data = () => {
    const [users, setUsers] = useState([
        {id:1, name:"Dhyego", age:20},
        {id:2, name:"Sara", age:19},
        {id:3, name:"Vanessa", age:23},
    ])

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4);

        setUsers((prevUsers) => prevUsers.filter((user) => randomNumber !== user.id))
    }
    
    return (
        <div>
            <ul class="name-list">
                {users.map((users) => 
                <li key={users.id}>
                    id: {users.id} | {users.name},  {users.age} idade</li>
                )}
            </ul>
            <button onClick={deleteRandom}>Deleta aleatoriamente</button>
        </div>
    );
};
export default Data;