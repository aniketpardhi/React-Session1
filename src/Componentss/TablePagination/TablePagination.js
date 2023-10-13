import React, { useState,useEffect } from "react";
import { data } from "./TableData";

const TablePagination = () => {
  const [itemperpage, setitemperpage] = useState(20);
  const [currentpage, setcurrentpage] = useState(1);
  const [page, setpage] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [search,setsearch]=useState('')

  console.log(search)

  const SetpageNumbers = () => {
    const firstIndex = (currentpage - 1) * itemperpage;
    const lastIndex = firstIndex + itemperpage;
    const dataToDisplay = search.length === 0 ? data : searchResults;
    return dataToDisplay.slice(firstIndex, lastIndex);
  };
  

   
  const generatePagination = () => {
    const totalPages = Math.ceil(
      (search.length === 0 ? data.length : searchResults.length) / itemperpage
    );
    let newPagination = [];
    for (let i = 1; i <= totalPages; i++) {
      newPagination.push(i);
    }
    setpage(newPagination);
  };
  
  useEffect(() => {
    if (search.length === 0) {
      // No search input, show all data
      setSearchResults([]);
      setcurrentpage(1); // Reset current page to 1
    } else {
      // Filter data based on search input
      const filteredData = data.filter((item) =>
        item.first_name.toLowerCase().includes(search.toLowerCase())
      );
      setSearchResults(filteredData);
    }
    generatePagination();
  }, [search]);

  return (
    <>
      <h3 style={{ textAlign: "center", fontSize: "1.4rem" }}>
        Table data Pagination
      </h3>

      <div>
        <input type="text" onChange={(e)=>setsearch(e.target.value)
        } />
      
      </div>



      <ul style={{ textAlign: "center" }}>
        {page.map((page, index) => (
          <li
            key={index} onClick={()=>setcurrentpage(page)}
           
            style={{ display: "inline-block", padding: "5px" }}
          >
            {page}
          </li>
        ))}
      </ul>
      <table
        cellPadding="5"
        cellSpacing="5"
        rules="all"
        border="1"
        align="center"
      >
        <thead>
          <tr>
            <th>Id</th>
            <th>FirstName</th>
            <th>Lastname</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Ip Address</th>
          </tr>
        </thead>
        <tbody>
          {SetpageNumbers().map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>{item.email}</td>
                <td>{item.gender}</td>
                <td>{item.ip_address}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
     
    </>
  );
};

export default TablePagination;
