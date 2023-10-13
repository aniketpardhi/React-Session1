import React, { useEffect, useRef } from 'react'

const UseRef = () => {
    const inputRef=useRef(null);

    useEffect(()=>{
        inputRef.current.focus();
    },[])

    const handleclick=()=>{
        inputRef.current.value="Hii User"
    }
  return (
    
    <div>{""}
       <p>
       <input type="text"  ref={inputRef} />
 <button onClick={handleclick}>Click</button>
       </p>
    </div>
  )
}

export default UseRef