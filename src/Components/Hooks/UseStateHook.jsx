import React, { useState } from 'react'
import "./hooks.css"
import UseEffectHook from './useEffectHook'
const UseStateHook = () => {
    const [color, setColor] = useState('red')
    const[increemant, setIncreemant] = useState(0)
    const[decreement, setDecreement] = useState(0)
    const[name, setName] = useState('Username')
  return (
    <>
       <section className='allHooks_Section'>
          <div className='useStateTiitle'>
            <h1 className='AllHooks_title'>UseState Hook</h1>
          </div>
          <h2 className='hooks_ttle'>My Favorite color is "{color}"</h2>
            <div className="container">
            <button className='btn_hooks' onClick={()=> setColor("Blue")}>Blue</button>
            <button className='btn_hooks red' onClick={()=> setColor("Red")}>Red</button>
            <button className='btn_hooks yellow' onClick={()=> setColor("Yellow")}>Yellow</button>
            <button className='btn_hooks pink' onClick={()=> setColor("Pink")}>Pink</button>
            <button className='btn_hooks green' onClick={()=> setColor("Green")}>Green</button>
            <button className='btn_hooks white' onClick={()=> setColor("White")}>White</button>
            </div>
            <div className="counter">
            <button onClick={(e)=>setIncreemant(e.target.value ++)} className='btn_hooks'>Increase Positive Number: {increemant}</button>
            <button onClick={(e)=>setDecreement(e.target.value --)} className='btn_hooks'>Decrease Negative Number: {decreement}</button>
            </div>

            <h2 className='hooks_ttle'>My Name is "{name}"</h2>
            <div className='names_container'>
                <button className='namesBtn' onClick={()=> setName("Asadulloh")}>Asadulloh</button>
                <button className='namesBtn' onClick={()=> setName("Asadbek")}>Asadbek</button>
                <button className='namesBtn' onClick={()=> setName("John")}>John</button>
                <button className='namesBtn' onClick={()=> setName("Tom")}>Tom</button>
                <button className='namesBtn' onClick={()=> setName("Tommy")}>Tommy</button>
            </div>
       </section>
       <UseEffectHook/>
    </>
  )
}

export default UseStateHook
