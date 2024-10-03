import React, { useEffect, useState } from 'react'

const UseEffectHook = () => {
    const[count, setCount] = useState(0);
    const[calculation, setCalculation] = useState(0);


    useEffect(()=> {
       let timer = setTimeout(()=> {
          setCount((count) => count + 1)
       }, 100)

       return ()=> clearTimeout(timer)
    },[])

    useEffect(()=> {
        setCalculation(()=> count * 10)
    }, [count])
  return (
    <section className='allHooks_Section'>
      <div className='useStateTiitle'>
            <h1 className='AllHooks_title'>UseEffect Hook</h1>
          </div>
          <h2 className='hooks_ttle'>I have rendered my app "{count}"</h2>

          <div className="calculation">
              <p className='useEffect_p'>Count: {count}</p>
              <button className='namesBtn' onClick={()=> setCalculation((c) => c * 1)}>+</button>
              <p className='useEffect_p'>Multiply: {calculation}</p>
          </div>
    </section>
  )
}

export default UseEffectHook
