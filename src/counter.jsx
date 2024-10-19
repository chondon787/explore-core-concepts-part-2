import { useState } from "react"

export default function Counter (){
    const [count,setCount] = useState(0);

    const evenHandleAdd=()=> {
        const newCount = count +1;
        setCount(newCount);
    }
    const reduceHandle = () =>{
        const newCount = count - 1;
        setCount(newCount);
    }


    return (
        <div >
            <h3>Counter : {count}</h3>
            <button onClick={evenHandleAdd}>Set Count</button>
            <button onClick={reduceHandle}>Reduc Count</button>
        </div>
    )
}