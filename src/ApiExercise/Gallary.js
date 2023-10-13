import React, { useEffect, useState } from "react";
import Unplash from "./Unplash";

const Gallary = () => {
  const [search, setsearch] = useState("");
  const [loader, setloader] = useState(true);
  const [error, seterror] = useState("");
  const [myresult, setmyresult] = useState([]);

  
  
  


  return (
    <>
      <div className="container">
        <h3
          style={{
            textAlign: "center",
            fontSize: "34px",
            opacity: "0.4",
            color: "red",
          }}
        >
          Unplash Gallery
        </h3>
        <div className="input" style={{ textAlign: "center" }}>
          <input type="text" /> <button>Click</button>
        </div>
      </div>
    </>
  );
};

export default Gallary;
