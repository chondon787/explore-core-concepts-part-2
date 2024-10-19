import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './counter'
import Team from './team'
import Users from './users'
import Friends from './friends'

function App() {
  // normal function button
   function handlerButton1(){
    alert('click button 1')
   }
// array funtion buttton
    const handlerButton2 = () => {
      alert('click button 2')

   }
  //  with funtion perameteer its very hard minded it
   const handlerButton4 = (num) =>{
    alert(num + 5)
   }

  return (
    <>
       
      <h3>Explore Core Concept Part-2</h3>
      <Friends></Friends>

      <Users></Users>

      <Team></Team>

      <Counter></Counter>
      

      {/* <button onClick={handlerButton1}>click me-1</button>
      <button onClick={handlerButton2}>click me-2</button>
      <button onClick={() =>{alert('handlerButton3')}}>click me-3</button>
      <button onClick={() => handlerButton4(3)}>button-4</button> */}
    </>
  )
}

export default App
