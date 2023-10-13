import React, { useState } from "react";

const Input2 = () => {
  const [user, Setuser] = useState("");
  const [status,setstatus]=useState(0)

  const handleChange = (e) => {
    Setuser(e.target.value);
  };

  return (
    <>
      <input
        type="text"
        onChange={handleChange}
        placeholder="enter Something"
        value={user}
      />
      
      <p>{user.length}</p>
      <p>{user}</p>

    

      <p>{user.length}</p>
     {status==0 && <span>Enter value</span>}
    </>
  );
};

export default Input2;
