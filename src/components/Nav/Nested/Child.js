import React from "react";

const Child = ({setuser,fun}) => {
  return (
    <>
      <div>
        <button onClick={()=>setuser("john")}>Button from child</button>
        <button onClick={()=>fun("red")}>Button fun</button>
      </div>
    </>
  );
};

export default Child;
