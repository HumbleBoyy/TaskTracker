import React, { useState } from 'react'
import "./hooks.css"
const UseStateHook = () => {
    const [color, setColor] = useState('red')
  return (
    <>
      <h1 className='hooks_ttle'>My Favorite color is {color}</h1>
      <button className='btn_hooks' onClick={()=> setColor("Blue")}>Blue</button>
      <button className='btn_hooks red' onClick={()=> setColor("Red")}>Red</button>
      <button className='btn_hooks yellow' onClick={()=> setColor("Yellow")}>Yellow</button>
      <button className='btn_hooks pink' onClick={()=> setColor("Pink")}>Pink</button>
      <button className='btn_hooks green' onClick={()=> setColor("Green")}>Green</button>
      <button className='btn_hooks white' onClick={()=> setColor("White")}>Blue</button>
    </>
  )
}

export default UseStateHook
