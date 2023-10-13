import React, { useRef, useState } from 'react'

const StopWatch = () => {
    const mystyle={
        containerStyle:{
            alignItem:"center",
           display:"flex",
         
           justifyContent:"center",
           flexDirection:"column",
           height:"100vh",
           background:"red",
           color:"white",

        },
        h3style:{
            fontSize:"1.9rem",
            fontWeight:"800",
        },
        buttons:{
            padding:"10px 30px",
            marginLeft:"20px",
            border:"none",
            color:"white",
            background:"green",
            textTransform:"uppercase",


        },
    }
    

    const [starttime,setstrattime]=useState(null);
    const [secondtime, setsecondtime]=useState(null)
    const myref=useRef(null);

    const handleStart=()=>{
        setstrattime(Date.now());
        setsecondtime(Date.now());
        clearInterval(myref.current);
        // console.log(clearInterval);
        myref.current=setInterval(() => {
            setsecondtime(Date.now())
        }, 10);
    }
    
    const handleStop=()=>{
        clearInterval(myref.current);
       
    }

    const handleReset=()=>{
        clearInterval(myref.current);
        setstrattime(null);
        setsecondtime(null)
    }
    

    let secondsPassed = 0;
  if (starttime != null && secondtime != null) {
    secondsPassed = (secondtime - starttime) / 1000;
    console.log(secondsPassed)
  }
  return (
    <>
    <div className='container' style={mystyle.containerStyle}>
        <h3 style={mystyle.h3style}>Stopwatch</h3>
        <h3 style={mystyle.h3style}>Time passed: {secondsPassed.toFixed(2)}</h3>

        <div>
        <button style={mystyle.buttons} onClick={handleStart}> Start</button>
        <button style={mystyle.buttons} onClick={handleStop}> stop</button>
        <button style={mystyle.buttons} onClick={handleReset}> Reset</button>

       
       
        </div>
    </div>

 
    </>
  )
}

export default StopWatch