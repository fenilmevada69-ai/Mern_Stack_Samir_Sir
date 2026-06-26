// import {useState} from "react"; 
// import axios from "axios";

// export function APIDemo3() {
//     const [users, setUsers] = useState([]);
//     async function getUsers  () {
//         let res = await axios.get("https://node5.onrender.com/user/user/");
//         console.log("res..axios... object..", res);
//         console.log("res.data.axios... object..", res.data);
//         console.log("res.data.data.axios... object..", res.data.data);
//         setUsers(res.data.data);
//     }
//     return (
//         <div style={{textAlign: "center"}}>
//             <h1>APIDemo3</h1>
//             <button className="product-btn" onClick={getUsers}>
//                 Get Users
//             </button>
//             <table className="product-table">
//                 <thead>
//                     <tr>
//                         <th>Name</th>
//                         <th>Age</th>
//                         <th>isActive</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {
//                         users.map((user) => {
//                             return <tr key={user._id}>
//                                 <td>{user.name}</td>
//                                 <td>{user.age}</td>
//                                 <td>{user.isActive ? "Yes" : "No"}</td>
//                             </tr>
//                         })
//                     }
//                 </tbody>
//             </table>
//         </div>
//   )
// }







// import axios from "axios";

// export const APIDemo3 = () => {

  
//   const addUser = async () => {
//     //hardcoded object create..
//     const userObj = {
//       name: "vansh1",
//       age: 20,
//       email: "vansh1@gmail.com",
//       password: "vansh123",
//       isActive: true,
//     };
//     const res = await axios.post(
//       "https://node5.onrender.com/user/user/",
//       userObj,
//     );
//     console.log(res); //axios object
//     console.log(res.data); //res.data..
//     if (res.status == 200) {
//       alert("user saved..");
//       //redirect..
//     }
//   };

//   return (
//     <div style={{ textAlign: "center" }}>
//       <h1>ApiDemo3</h1>
//       <button onClick={addUser}>ADD</button>
//     </div>
//   );
// };










import axios from "axios";
import React from "react";

export const APIDemo3 = () => {

  
  const addUser = async () => {
    //hardcoded object create..
    const userObj = {
      name: "vansh1",
      age: 20,
      email: "vansh1@gmail.com",
      password: "vansh123",
      isActive: true,
    };
    const res = await axios.post(
      "https://node5.onrender.com/user/user/",
      userObj,
    );
    console.log(res); //axios object
    console.log(res.data); //res.data..
    if (res.status == 200) {
      alert("user saved..");
      //redirect..
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>ApiDemo3</h1>
      <button onClick={addUser}>ADD</button>
    </div>
  );
};