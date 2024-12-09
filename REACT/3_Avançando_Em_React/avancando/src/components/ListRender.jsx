import { useState } from "react";

const ListRender = () => {
    const [list] = useState(["Dhyego", "Sara", "Vanessa"]);

    const [users, setUsers] = useState ([
        {id: 1, name: "Sara", age: 19},
        {id: 2, name: "Dhyego", age: 20},
        {id: 3, name: "Vanessa", age: 23},
    ])
    return <div>
        <ul>
            {list.map((item) =>(
                <li>{item}</li>
            ))}
        </ul>
        <ul>
            {users.map((user) => (
                <li key={user.id}>
                    {user.name} - {user.age} anos
                </li>
            ))}
        </ul>
    </div>;
};

export default ListRender;