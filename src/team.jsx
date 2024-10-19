import { useState } from "react"

export default function Team(){
const [team, setteam] = useState(11)

function addHandler(){
    const newteam = team  + 1;
    setteam(newteam);
}
function removeHandler(){
    const newRemove = team - 1;
    setteam(newRemove);
}

const teamStyle = {
    border :'2px solid purple',
    borderRadius:'8px',
    margin:'5px',
    padding:'10px'
}

    return (
        <div style={teamStyle}>
            <h2>Players : {team}</h2>
            <button onClick={addHandler}>Add</button>
            <button onClick={removeHandler}>Remove</button>
        </div>
    )
}