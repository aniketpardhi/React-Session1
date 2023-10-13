import React, { useEffect, useState } from "react";
// array of names
const data = ["rahul", "rohit", "alok", "sumit", "rahul"];
const Search = () => {
  // to store input value
  const [search, setSearch] = useState("");
  //   to store result count
  const [result, setResult] = useState(0);

  useEffect(() => {
    let res = data.filter((item) => {
      if (item == search) {
        return true;
      }
    });
    console.log(res);
    setResult(res.length);
  }, [search]);

  return (
    <div>
      <h2>Search </h2>
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => setSearch(e.target.value)}
      />
      <p>
        {result == 0 ? <span>Not Found</span> : <span>{search} found</span>}
      </p>
      <ul>
        {data.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default Search;
