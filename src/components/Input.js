import { useState } from "react"


const Input = () => {
    const [data,setdata]=useState("Hii");
    const Handleclick=()=>setdata("Aniket");
  return (
   <>
  {data}
  <button onClick={Handleclick}>Click</button>
   </>
  )
}

export default Input