
import { useEffect, useState } from 'react';
import './Friends.css';
import Friend from './friend';

export default function Friends(){
    const [friends, setFriends] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response => response.json())
        .then(data => setFriends(data))
    },[])

    return (
        <div className ="box">
            <h2>Friends : {friends.length}</h2>
            {
                friends.map(friend => <Friend item={friend}></Friend>)
            }
        </div>
    );
}