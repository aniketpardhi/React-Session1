import React, { useState } from "react";
import "./MyNav.css";
import MySiebar from "../MySiebar";

const MyNav = () => {
    const [nav,setnav]=useState(!true);
  return (
    <>
      <header className="header-main">
        <nav>
          <div className="flex">
            <div className="navbar-Logo">
              <h3>Navbar</h3>
            </div>
            <div className="btn" onClick={()=>setnav(!nav)}>
              <img
                src="https://cdn.onlinewebfonts.com/svg/img_236504.png"
                alt=""
                width={"30"}
              />
            </div>
            
          </div>
          {nav===!true ? " ": <MySiebar/>}
        

          
        </nav>
      </header>
    </>
  );
};

export default MyNav;
