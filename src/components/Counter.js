import React ,{useState} from 'react'



const Counter = () => {
    const [Counter,setCounter]=useState(0)
  return (
    <div style={{textAlign:"center"}}>
        Counter
        <p style={{textAlign:"center",marginLeft:"10px"}}>{Counter}</p>
        <button onClick={()=>setCounter(Counter+1)}>Increment</button>
        <button onClick={()=>setCounter(Counter-1)}>Decrement</button>
        <button onClick={()=>setCounter(0)}>Reset</button>
        </div>
  )
}
export default Counter