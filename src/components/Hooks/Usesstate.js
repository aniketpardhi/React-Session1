import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Usesstate = () => {
  const [loader,setloader]=useState(true);
  const [error,seterror]=useState('');
  const [post,setpost]=useState([]);


  useEffect(()=>{
     axios.get('https://jsonplaceholdher.typicode.com/posts/1')
     .then(response=>{
      setloader(false);
      setpost(response.data)
      seterror('')
     })
     .catch(error=>{
      seterror( "something went wrong");
      setloader(false)
     })
  },[])

  return (
    <div>
      {loader ? "loading the data":post.title}
      {error ? error:null}

    </div>
  )
}

export default Usesstate