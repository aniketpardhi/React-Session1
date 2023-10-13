import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const [counter ,setcounter]=useState(0);
    const [toggle,setoggle]=useState(true);
    console.log(counter)
    console.log(toggle)
    // [ ] if we not use square bracket it call on every state changes
    // [ ] if square bracket use then it call one time
    // // [dependancy] will call useeffect on dependancy changes
  

    useEffect(()=>{
       
    },[counter])


  return (
    <>

    <h3>{counter}</h3>
    <button onClick={()=>setcounter(counter+1)}>increment</button>
    <button onClick={()=>setoggle(!toggle)}>Toggle</button>
    {toggle  && <h3>toggle</h3>}

    </>
  )
}

export default UseEffect