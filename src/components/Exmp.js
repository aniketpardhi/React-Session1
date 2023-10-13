import React, { useState } from 'react';

const Exmp = () => {
  const [Add, setAdd] = useState(111);
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setAdd(Add + 111);
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (Add > 111) {
      setAdd(Add - 111);
      setQuantity(quantity - 1);
    }
  };

  return (
    <>
      <div className="box border-black bg-black text-white d-inline-block p-4">
        <h3>Apple box</h3>
        <h4>Price Rs:{" "} {Add} </h4>
        <div className=''>
          <button className='mx-2 bg-success border-0 px-4 text-white' onClick={handleIncrement}>+</button>
          <button className='mx-2 bg-success border-0 px-4 text-white' onClick={handleDecrement}>-</button>
        </div>
        <p>Items added: {quantity}</p>
      </div>
    </>
  );
}

export default Exmp;
