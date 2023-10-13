import React, { useState } from 'react'
import TabB from './TabB'
import TabA from './TabA'
import TabC from './TabC'

const MyTab1 = () => {
    const [status,setstatus]=useState(1);
  return (
    <>
<button onClick={()=>setstatus(1)}>first</button> 

<button onClick={()=>setstatus(2)}>Second</button>

<button onClick={()=>setstatus(3)}>Third</button>


{status==1 && <TabA/>}
{status==2 && <TabB/>}
{status==3 && <TabC/>}


    </>
  )
}

export default MyTab1