import React, { useState } from "react";

const Calci = () => {
  const [num1, setnum1] = useState("0");
  const [num2, setnum2] = useState("0");
  const [result, setresult] = useState("Result Show");

  const add = () => {
    // if(num1,num2==0){
    //   setresult("please enter number")
      
    // }
    // else{
    //   setresult(`addtion of two number is ` + (Number(num1) + Number(num2)));
    // }

    const number1 = Number(num1);
    const number2 = Number(num2);
    const product = number1 + number2;
    

    setresult(number1 !== 0 && number2 !== 0 ? `Multiplication of two numbers is ${product}` : <span>Please enter numbers</span>);
   
  };
  const Multi = () => {
    const number1 = Number(num1);
    const number2 = Number(num2);
    const product = number1 * number2;

    setresult(number1 !== 0 && number2 !== 0 ? `Multiplication of two numbers is ${product}` :  <span>Please enter numbers</span>);
   
  };
  const division=()=>{
    const number1 = parseInt(num1);
    const number2 = parseInt(num2);
    const product = number1 / number2;

    setresult(number1 !== 0 && number2 !== 0 ? `Multiplication of two numbers is ${product}` : <span>Please enter numbers</span>);
   
  };

  const Sub=()=>{
    const number1 = Number(num1);
    const number2 = Number(num2);
    const product = number1 - number2;

    setresult(number1 !== 0 && number2 !== 0 ? `Multiplication of two numbers is ${product}` : <span>Please enter numbers</span>);
  };
  return (
    <>
      <section className=" p-5">
        <div className="container text-center">
         <div className="bg-dark padset p-3 m-auto w-50">
         <div className="mt-3" >
            <h5 className="text-white fs-1 py-2 fw-bold">Simple Calculator  </h5>
            <input
              type="text"
              placeholder="Enter number"
              onChange={(e) => setnum1(e.target.value)}
              className="w-50 my-2"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Enter number"
              onChange={(e) => setnum2(e.target.value)}
              className="w-50 my-3"
            />
          </div>
        
            <button className="btn btn-info mx-2 border-0 " onClick={add}>
              Add 
            </button>
          

        
            <button
              className=" mx-2 border-0 btn btn-info h-25"
              onClick={Multi}
            >
              Multi
            </button>
            
            <button
              className=" mx-2 border-0 btn btn-info h-25"
              onClick={division} 
            >
              division
            </button>

              
            <button
              className="  mx-2 border-0 btn btn-info h-25"
              onClick={Sub}
            >
              Substraction
            </button>
        
          <div>
            <p className="fs-2 text-capitalize fw-bolder text-white pt-4">{result}</p>
            
          </div>
         </div>
        </div>
      </section>
     
    </>
  );
};

export default Calci;
