import React, { forwardRef, useState, useImperativeHandle ,toggle } from "react";
const Button = forwardRef((props, ref) => {
  const [toggle, setToggle] = useState(false);

  useImperativeHandle(ref, () => ({
    alterToggle() {
      setToggle(!toggle);
    },
  }));
});

const Buttons = () => {
  return (
    <>
      <button>Button from child</button>
      {toggle &&  <h3>Toggle</h3>}
    </>
  );
};

export default Buttons;
