import React, { useState } from 'react'

const Parent1 = ({setusername}) => {
  const [name, setname]=useState("");
  // const handle=()=>{
    
  // }
  return (
  <>
  <div>
    Username:{""}
  <input type="text" onChange={(e)=>setusername(e.target.value)} /></div></>
  )
}

export default Parent1