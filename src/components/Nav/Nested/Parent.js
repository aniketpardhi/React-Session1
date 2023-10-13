import React, { useState } from 'react';
import Child from './Child';

const Parent = () => {
    const [user,setuser]=useState("");
    const [color,setcolor]=useState("")
    const fun=(arg)=>{
       setcolor(arg)
    }
  return (
    <div style={{background:color,color:"white"}}>
        <p>Hii {user}</p>
        <Child setuser={setuser} fun={fun}/>
    </div>
  )
}

export default Parent