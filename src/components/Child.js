import React, { useEffect } from 'react'

const Child = ({returnName}) => {
    useEffect(()=>{
        console.log("child")
    },[returnName])
  return (
   <>
   {returnName("aniket")}
   </>
  )
}

export default Child