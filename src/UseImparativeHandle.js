import React, { useRef, useState } from "react";
import Buttons from "./components/Buttons";

const UseImparativeHandle = () => {
  const buttonRef = useRef(null);
  const [toggle,setToggle]=useState("")
  return (
    <>
      <div>
        <button
          onClick={() => {
            buttonRef.current.alterToggle();
          }}
        >
          Button from parent
        </button>
        <Buttons ref={buttonRef}/>
      </div>
    </>
  );
};

export default UseImparativeHandle;
