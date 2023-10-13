import React from 'react'
// how to import multiple function react

// this is our first function if export first then first function export to app js and show it content as a output
const Fisrt = () => {
  return (
    <div>Fisrt</div>
  )
}
// this is our second function if export second  function export to app js and show it content as a output
const Second=()=>{
  return(
    <div>Second</div>
  )
  // but in browser it show  that only one function is export 
  // so if a want to export both of function then what we do

  // so we use destrcurturing {}
}

export  {Fisrt,Second};