
import './Friends.css'
import User from './user';

import { useEffect, useState } from "react"

export default function Users(){
    const [users, setUsers] = useState([]);
    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => setUsers(data))
    }, [])
    
    return (
        <div className="box">
            <h2>Users :{users.length}</h2>
        {
            users.map(user => <User user={user}></User>)
        }
        </div>
    )
}

/* 1. object store 
    2. useEffect with callback and dependency array
    3. fetch data by placeholder 

*/