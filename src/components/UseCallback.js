import React, { useCallback, useState } from 'react';
import Child from './Child';

const UseCallback = () => {
    const [toggle,settoggle]=useState(true);
    const [data,setdata]=useState("hii  ");
    const returnName=useCallback(
        (arg)=>{
            return data+arg;
        },[data]
    )
  return (
    <>
  <h2>Usecallback</h2>
  <Child returnName={returnName}/>
  <button onClick={()=>settoggle(!toggle)}>Toggle</button>
  {toggle && <p>Toggle</p>}

    </>
  )
}

export default UseCallback