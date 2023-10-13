import React, { useState } from 'react'
import Second from './Second'

const First = ({fun}) => {
 
  return (
    <div>First
        <Second fun={fun}/>
        <button onClick={fun("red")}>Click</button>
    </div>
  )
}

export default First