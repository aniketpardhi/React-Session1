import React,{useState} from "react";

const Second = () => {
  const [color, setcolor]=useState("");
  const fun =(arg)=>{
    setcolor(arg)
  }
  return (
    <div>
      <div className="container" style={{background:color}}>
        <h3>Aniket Pardhi</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sed
          similique itaque! Cumque ad corrupti quae? Commodi sed reprehenderit
          maxime architecto reiciendis, nesciunt nulla voluptatem aliquam fugit
          cum, cumque quasi.
        </p>
        <h3>2022-2023</h3>
      </div>
    </div>
  );
};

export default Second;
