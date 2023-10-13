import React, { useState } from 'react'

const Resume = () => {
    const [name,setmyname]=useState("");
    const [nametwo,setmynametwo]=useState("");
    
    
    
    const [addname,setaddmyname]=useState([]);

    const addtaask=()=>{
        if(name,nametwo.length==0){
            setmyname("please Enter something")
        }
        addname.push(name);
        setmyname("");

    }

   

  return (
   <>
   <div className="container">
    <div className='heading-h1'> 
        <h3 className='text-center'>Form</h3>
    </div>
   <div className="form-main text-center ">
   <form action="#">
         Firstname: <input type="text" className='mt-2'   onChange={(e)=>setmyname(e.target.value) } />
         <br/>
         Lasttname: <input type="text" className='mt-2'   onChange={(e)=>setmynametwo(e.target.value) } />
         <p>{name}</p>
    </form>
    <button onClick={addtaask}> Submit</button>
    <div className="show">
      
    </div>
   </div>
   </div>
   </>
  )
}

export default Resume