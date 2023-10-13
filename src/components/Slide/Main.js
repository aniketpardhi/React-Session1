import React, { useState } from 'react';
import First from './First';
import Second from './Second';
import Third from './Third';

const Main = () => {
    const [status,setstatus]=useState(1)
  return (
    <>
   <div className='' style={{display:"flex",justifyContent:"center",alignItems:"center", gap:"30px"}}>
   <button onClick={()=>setstatus(1)}>---</button>
   <button onClick={()=>setstatus(2)}>---</button>
   <button onClick={()=>setstatus(3)}>----</button>
   </div>
 {status===1 && <First/>}
 {status===2 && <Second/>}
 {status===3 && <Third/>}
    </>
  )
}

export default Main