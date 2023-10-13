import React, { useState } from 'react'
const Navi = () => {
  return (
    <>
    <div className="content" style={{background:"black",padding:"20px 30px"}}>
        <div className="navbarmain" style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <div className="log">
                <h3 style={{fontSize:"1.9rem",fontWeight:"700",color:"white"}}>Mylog</h3>
            </div>
            <div className="navlist">
                <ul style={{display:"flex",alignItems:"center",gap:"20px",alignItems:"center"}}>
                    <li style={{listStyle:"none",fontSize:"1.4rem",color:"white"}}>Home</li>
                    <li style={{listStyle:"none",fontSize:"1.4rem",color:"white"}}>About</li>
                    <li style={{listStyle:"none",fontSize:"1.4rem",color:"white"}}>Service</li>
                    <li style={{listStyle:"none",fontSize:"1.4rem",color:"white"}}>Contact Us</li>
                </ul>
            </div>
        </div>
    </div>
    </>
  )
}

export default Navi