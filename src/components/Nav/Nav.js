import React, { useState } from "react";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";

const Nav = () => {
  const [pageNumber, setPage] = useState(1);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          {/* <button className="navbar-brand">Navbar<button/> */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <button
                  className={pageNumber == 1 ? "nav-link active" : "nav-link"}
                  aria-current="page"
                  onClick={() => setPage(1)}
                >
                  page1
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={pageNumber == 2 ? "nav-link active" : "nav-link"}
                  onClick={() => setPage(2)}
                >
                  Page2
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={pageNumber == 3 ? "nav-link active" : "nav-link"}
                  onClick={() => setPage(3)}
                >
                  Page2
                </button>
              </li>
            </ul>
           
          </div>
          
        </div>
      </nav>
      {pageNumber==1 && <Page1/>}
      {pageNumber==2 && <Page2/>}
      {pageNumber==3 && <Page3/>}
    </>
  );
};

export default Nav;
