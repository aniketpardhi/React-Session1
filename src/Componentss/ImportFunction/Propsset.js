import React from 'react';

const Propsset = ({ myfun }) => {
  return (
    <>
      <button onClick={myfun}>hiii</button> {/* Call myfun when the button is clicked */}
    </>
  )
}

export default Propsset;


// import React, { useState } from "react";
// import Propsset from "./Componentss/ImportFunction/Propsset";

// function App() {
//   const myfun = () => {
//     alert("hii");
//   }

//   return (
//     <>
//       <Propsset myfun={myfun} /> {/* Pass myfun as a prop */}
//     </>
//   );
// }

// export default App;