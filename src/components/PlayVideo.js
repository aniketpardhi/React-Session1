import React, { useRef, useState } from 'react'

const PlayVideo = () => {
    const [isplaying, setisplaying]=useState(false);
    const ref=useRef(null)

    const handleclick=()=>{
        const nextplaying=!isplaying;
        setisplaying(nextplaying);
        if(nextplaying){
            ref.current.play();
        }
        else{
            ref.current.pause();
        }
    }
  return (
    <>
    <div className="container">
        <h3>Playvideo</h3>

        <video>
            <source src='' />
        </video>

        <button onClick={handleclick}>{isplaying ? "play":"pause"}</button>
    </div>
    </>
  )
}

export default PlayVideo