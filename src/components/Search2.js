import React, { useEffect, useState } from 'react'
const data=["rohit sharma","rahul sharma","abhishek gupta", "raj gupta"]

const Search2 = () => {
    const [search,setsearch]=useState("");
    const [result,setresult]=useState([]);
    

    const handleclcik=()=>{
      if(search.length==0){
        setresult(data)
    } else{
        let res=data.filter((item)=>{
         if(item.toLowerCase().includes(search.toLowerCase())){
            return true;
         }
        })
        setresult(res)
    }
    }
    
      

 




  return (
    <>
  <h2>Serch Functionality</h2>
  <input type="text"  onChange={(e)=>setsearch(e.target.value)}/>
  
  
  <ul>
  {result.map((item,index)=>{
        return <li key={index}>{item}</li>
    })}
  </ul>
    </>
  )
}

export default Search2