// // import React, { useState } from "react";

// // const ToDo = () => {
// //   const [task, setTask] = useState("");
// //   const [tasklist, setTasklist] = useState([]);
// //   const [completed, setCompleted] = useState([]);
// //   // arrow function- user defined
// //   const handleClick = () => {
// //     console.log("click");
// //     if (task.trim().length == 0) {
// //       return;
// //     }
// //     tasklist.push(task.trim());
// //     console.log(tasklist);
// //     setTask("");
// //   };
// //   const handleDelete = (arg) => {
// //     let res = tasklist.filter((item, index) => {
// //       if (arg == index) {
// //         return false;
// //       }
// //       return true;
// //     });
// //     console.log(res);
// //     setTasklist(res);
// //   };
// //   const handleComplete = (arg) => {
// //     let res = tasklist.filter((item, index) => {
// //       if (arg == index) {
// //         completed.push(item);
// //       }
// //       return false;
// //     });
// //     console.log(res);
// //     handleDelete(arg);
// //   };



// //   const mydelet = (arg) => {
// //     let res = tasklist.filter((item, index) => {
// //       if (arg == index) {
// //         return false;
// //       }
// //       return true;
// //     });
// //     console.log(res);
// //     setCompleted(res);
// //   };

// //   return (
// //     <div className="container">
// //       <h3>Todo</h3>
// //       <p>
// //         <input
// //           type="text"
// //           placeholder="Task"
// //           onChange={(e) => setTask(e.target.value)}
// //           value={task}
// //         />{" "}
// //         <button onClick={handleClick}>Add Task</button>
// //       </p>
// //       {tasklist.length == 0 ? <span>Add task</span> : ""}
// //       <h5>Pending</h5>
// //       <ul>
// //         {tasklist.map((item, index) => {
// //           return (
// //             <li key={index}>
// //               {item} <button onClick={() => handleComplete(index)}>Copy</button>
// //               <button onClick={() => handleDelete(index)}>D</button>
// //             </li>
// //           );
// //         })}
// //       </ul>
// //       <h5>Completed</h5>
// //       <ul>
// //         {completed.map((item, index) => {
// //           return (
// //             <li key={index}>
// //               {item}
// //               {/* <button onClick={() => handleDelete(index)}>d</button> */}
// //               <button onClick={()=>mydelet(index)}>delete</button>
// //             </li>
// //           );
// //         })}
// //       </ul>
// //     </div>
// //   );
// // };

// // export default ToDo;

// import React, { useEffect, useState } from "react";

// const ToDo = () => {
//   const [task, setTask] = useState("");
//   const [tasklist, setTasklist] = useState([]);
//   const [completed, setCompleted] = useState([]);

//   const handleClick = () => {
//     if (task.trim().length === 0) {
//       return;
//     }
//     // Instead of directly modifying the tasklist, create a new array with the new task.
//     setTasklist([...tasklist, task.trim()]);
//     setTask("");
//   };

//   const handleDelete = (index) => {
//     const updatedTasklist = tasklist.filter((_, i) => i !== index);
    

//     setTasklist(updatedTasklist);
//     localStorage.setItem("tasklist", JSON.stringify(updatedTasklist));
//   };

//   const handleComplete = (index) => {
//     const taskToComplete = tasklist[index];
//     setCompleted([...completed, taskToComplete]);
//     handleDelete(index);
//   };

//   const handleCompletedDelete = (index) => {
//     const updatedCompleted = completed.filter((_, i) => i !== index);
//     setCompleted(updatedCompleted);
//     localStorage.setItem("completed", JSON.stringify(updatedCompleted));
//   };

  
//   useEffect(() => {
//     // Retrieve task data from local storage when the component mounts
//     const storedTasklist = JSON.parse(localStorage.getItem("tasklist")) || [];
//     console.log(storedTasklist)
//     const storedCompleted = JSON.parse(localStorage.getItem("completed")) || [];
//     console.log(storedCompleted)
//     setTasklist(storedTasklist);
//     setCompleted(storedCompleted);
//   }, []);

//   // Update local storage whenever tasklist or completed changes
//   useEffect(() => {
//     localStorage.setItem("tasklist", JSON.stringify(tasklist));
  
//     localStorage.setItem("completed", JSON.stringify(completed));
//   }, [tasklist, completed]);



//   return (
//     <div className="container">
//       <h3>Todo</h3>
//       <p>
//         <input
//           type="text"
//           placeholder="Task"
//           onChange={(e) => setTask(e.target.value)}
//           value={task}
//         />
//         <button onClick={handleClick}>Add Task</button>
//       </p>
//       {tasklist.length === 0 && <span>Add tasks</span>}
//       <h5>Pending</h5>
//       <ul>
//         {tasklist.map((item, index) => (
//           <li key={index}>
//             {item}
//             <button onClick={() => handleComplete(index)}>Complete</button>
//             <button onClick={() => handleDelete(index)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//       <h5>Completed</h5>
//       <ul>
//         {completed.map((item, index) => (
//           <li key={index}>
//             {item}
//             <button onClick={() => handleCompletedDelete(index)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ToDo;



import React, { useEffect, useState } from "react";

const ToDo = () => {
  const [task, setTask] = useState("");
  const [tasklist, setTasklist] = useState([]);
  const [completed, setCompleted] = useState([]);

  useEffect(() => {
  
    const storedTasklist= localStorage.getItem("tasklist") ? JSON.parse(localStorage.getItem("tasklist")):[];
    const storedCompleted= localStorage.getItem("completed") ? JSON.parse(localStorage.getItem("completed")):[];

    
    setTasklist(storedTasklist);
    setCompleted(storedCompleted);
  }, []);

  const handleClick = () => {
    if (task.trim().length === 0) {
      return;
    }
    const newTasklist = [...tasklist, task.trim()];
    setTasklist(newTasklist);
    setTask("");
    localStorage.setItem("tasklist", JSON.stringify(newTasklist)); 
    
  };

  const handleDelete = (index) => {
    const updatedTasklist = tasklist.filter((_, i) => i !== index);
    setTasklist(updatedTasklist);
    localStorage.setItem("tasklist", JSON.stringify(updatedTasklist)); 
  };

  const handleComplete = (index) => {
    const taskToComplete = tasklist[index];
    setCompleted([...completed, taskToComplete]);
    handleDelete(index);
    localStorage.setItem("completed", JSON.stringify([...completed, taskToComplete])); 
  };

  const handleCompletedDelete = (index) => {
    const updatedCompleted = completed.filter((_, i) => i !== index);
    setCompleted(updatedCompleted);
    localStorage.setItem("completed", JSON.stringify(updatedCompleted)); 
  };

  return (
    <div className="container">
      <h3>Todo</h3>
      <p>
        <input
          type="text"
          placeholder="Task"
          onChange={(e) => setTask(e.target.value)}
          value={task}
        />
        <button onClick={handleClick}>Add Task</button>
      </p>
      {tasklist.length === 0 && <span>Add tasks</span>}
      <h5>Pending</h5>
      <ul>
        {tasklist.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => handleComplete(index)}>Complete</button>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
      <h5>Completed</h5>
      <ul>
        {completed.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => handleCompletedDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDo;


