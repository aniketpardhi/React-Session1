import React, { useState } from 'react'

const Usestate1 = () => {
    const [check,setcheck]=useState(!true);

    const handle=(e)=>{
     setcheck( e.target.checked)
    }
  return (
  <>
  <input type="checkbox" className="type" onChange={handle} checked={check}/> i liked this
  <p >{ check ? "you cheked": "not checked"}</p>
  </>
  )
}

export default Usestate1